import {Component, OnInit} from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import {Band, BandsService} from "../services/bands.service";
import BandsJson from "src/assets/json/bands.json";
import {Title} from '@angular/platform-browser';
import {SeoService} from "../services/seo.service";

/**
 * Show the bands
 */
@Component({
  selector: 'app-list',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  constructor(
    public bandsService: BandsService,
    private title: Title,
    private seo: SeoService) {
  }

  allRockBands: Array<Band> = [];
  originalBandsList: Array<Band> = BandsJson;

  searchValue: string;
  noFilteredBands: Array<Band>;


  ngOnInit() {
    let title: string = "Ng Seo - Rock bands website";
    this.title.setTitle(title);

    this.seo.generateTags({
      title: "Ng Seo - Rock bands website",
      description: "70s Rock bands",
      slug: 'Rock bands'
    });
    this.fetchBands();
  }

  private fetchBands() {
      this.bandsService
        .getBands()
        .subscribe((bands: Array<Band>) => {
          this.bandsService.bandsSource.next.bind(bands);
          this.allRockBands = bands;
          this.noFilteredBands = bands;

        });

  }

  removeBand(event): void {
    let idBand = event.target.id;
    const filteredBands = this.allRockBands.filter(band => {
      return band.id !== parseInt(idBand, 10);
    });
    this.updateDatabands(filteredBands);
  }

  restoreOriginalsBands() {
    this.updateDatabands(this.originalBandsList);
  }

  //Second part of the fetch to update data base.
  //filtered is an array with bands (updated bands, less or more)
  //next: indicate the type of response and update the state again
  updateDatabands(updatedArrayBand: Array<Band>) {
      this.bandsService.updateBands(updatedArrayBand).subscribe((bands: Array<Band>) => {
        this.bandsService.bandsSource.next.bind(bands);

        this.allRockBands = bands;
        this.noFilteredBands = bands;
      });
  }


  searchBands(): void {
    const filteredBands = this.noFilteredBands.filter(band => band.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    this.allRockBands = filteredBands;
  }


}




