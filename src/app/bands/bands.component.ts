import {Component, OnInit} from '@angular/core';
import {Band, BandsService} from "../services/bands.service";
import BandsJson from "src/assets/json/bands.json";
import {SeoService} from "../services/seo.service";


/**
 * Show the list with the all rock bands
 */
@Component({
  selector: 'app-list',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  constructor(
    public bandsService: BandsService,
    private seoService: SeoService,
  ){
  }

  /**
   * allRockBands: Array which contains objects (type Band) with all bands data
   * originalBandsList: Array which contains bands in original json file
   * searchValue: text introduced by the user in the search input
   * noFilteredBands: Array updated when a band is removed
   */
  allRockBands: Array<Band> = [];
  originalBandsList: Array<Band> = BandsJson;
  searchValue: string = "";
  noFilteredBands: Array<Band> = [];

  ngOnInit() {
    if(this.allRockBands.length == 0) {
      this.getBandsData();
    }
  }

  /**
   * Get bands data from the data base
   * Update allRockBands and noFilteredBands with the response
   */
  private getBandsData() {
      this.bandsService
        .getBands()
        .subscribe((bands: Array<Band>) => {
          this.allRockBands = bands;
          this.noFilteredBands = bands;
          this.generateTags();
        });
  }

  /**
   * Get id band selected to remove
   * Filter allRockbands and update filteredBands with all bands except band to removed
   */
  removeBand(event): void {
    let idBand = event.target.id;
    const filteredBands = this.allRockBands.filter(band => {
      return band.id !== parseInt(idBand, 10);
    });
    this.updateDatabands(filteredBands);
  }

  /**
   * Call updateDataBands to update data base with original bands
   */
  restoreOriginalsBands() {
    this.updateDatabands(this.originalBandsList);
  }

  /**
   * Update data base and update state
   * @param updatedArrayBand: objects array (Band type)
   * next: indicate the type of response and update the state again
   */
  updateDatabands(updatedArrayBand: Array<Band>) {
      this.bandsService.updateBands(updatedArrayBand).subscribe((bands: Array<Band>) => {
        this.allRockBands = bands;
        this.noFilteredBands = bands;
        this.generateTags();
      });
  }

  /**
   * Filter bands list and compare the searchValue introduced by the user with allRockBands
   */
  searchBands(): void {
    this.allRockBands = this.noFilteredBands.filter(band => {
      return band.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  /**
   * Get keywords from the seoService
   */
  generateTags() {
    this.seoService.generateTags({
      title: "Ng Seo - Rock bands website",
      description: "70s Rock bands",
      slug: 'Rock bands'
    }, this.allRockBands);
  }
}




