import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import {BandsService, Band} from "./bands.service";
import BandsJson from "src/assets/json/bands.json";

/**
 * Show the list
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //constructor(private http: HttpClient) {}
  constructor(public bandsService: BandsService) {}
  allRockBands: Array<Band> = [];
  filteredBands = '';
  inputValue: string;
  originalBandsList: Array<Band> = BandsJson;


  ngOnInit() {
    this.fetchBands();
  }

  private fetchBands() {
    this.bandsService
      .getBands()
      .subscribe( {
        next: (bands: Array<Band>) => {
          this.allRockBands = bands;
        }
      });
  }

   removeBand(event) :void{
    let idBand = event.target.id;
    console.log(idBand);

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
    this.bandsService.updateBands(updatedArrayBand).subscribe({
      next: (bands: Array<Band>) => {
        this.allRockBands = bands;
      }
    });
  }






  // getInputValue(event) {
  //   let searchValue = event.currentTarget.value;
  //   console.log(searchValue);
  //   this.inputValue = searchValue;
  // }


}




