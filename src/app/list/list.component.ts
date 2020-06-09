import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import {BandsService, Band} from "./bands.service";



/**
 * Show the list
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  //constructor(private http: HttpClient) {}
  constructor(public bandsService: BandsService) {}
  allRockBands: Array<Band> = [];


  ngOnInit() {
    this.fetchBands();
  }


  // private fetchBands() {
  //   this.json
  //     .getJsonBands('https://angular-rocks.firebaseio.com/bands.json')
  //     .subscribe(data => {
  //       console.log(data);
  //       return data;
  //     });
  // }

  private fetchBands() {
    this.bandsService
      .getJsonBands('https://angular-rocks.firebaseio.com/bands.json')
      .subscribe( {
        next: (bands: Array<Band>) => {
          console.log(bands);
          console.log(this.allRockBands);
          const allBands: Array<Band> = bands;
          console.log(allBands);
          this.allRockBands = allBands;
        }
      });
  }
}




