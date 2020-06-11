import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import {BandsService, Band} from "./bands.service";



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


  ngOnInit() {
    this.fetchBands();
  }

  private fetchBands() {
    console.log('fetchBands');
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

    const filtered = this.allRockBands.filter(band => {
      return band.id !== parseInt(idBand, 10);
    });

    this.bandsService.updateBands(filtered).subscribe({
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




