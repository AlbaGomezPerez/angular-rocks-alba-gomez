import {Component, OnInit} from '@angular/core';
import {BandsService, Band} from "../services/bands.service";
import {Router} from "@angular/router";


/**
 * Show the form to create a new band
 */
@Component({
  selector: 'form',
  templateUrl: './newBand.component.html',
  styleUrls: ['./newBand.component.css']
})
export class NewBandComponent implements OnInit {
  allRockBands: Array<Band> = [];
  newBand: Band = {
    country: '',
    id: null,
    image: '',
    members: '',
    name: '',
    title: '',
    video: '',
    website: '',
  };

  constructor (
    public bandsService: BandsService,
    private router: Router) {}


  /**
   * Update allRockBands from bandsService
   */
  ngOnInit () {
    this.getBands();
  }

  getBands() {
    if(this.allRockBands.length == 0) {
      this.bandsService.getBands().subscribe((bands: Array<Band>)  => {
        this.allRockBands = bands;
      });
    }
  }

  /**
   * Generate random id
   */
  generateBandId(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Get data band created by the user
   * Fix default data
   */
  getDataForm () {
    const defaultImage = "https://concepto.de/wp-content/uploads/2018/09/rock-e1536060138214.jpg";
    this.newBand.id = parseInt(this.generateBandId(100, 1000000).toFixed(0)) ;
    this.allRockBands.push(this.newBand);

    if(this.newBand.image === '') {
        this.newBand.image = defaultImage
    }

    if(this.newBand.name === '') {
        this.newBand.name = 'Band name'
    }

    this.updateDatabands(this.allRockBands);
  }

  /**
   * Update data base and update state
   * @param updatedArrayBand: objects array (Band type)
   * next: indicate the type of response and update the state again
   */
  updateDatabands(updatedArrayBand: Array<Band>) {
      this.bandsService.updateBands(updatedArrayBand).subscribe({
        next: (bands: Array<Band>) => {
          this.router.navigate(['/list']);
        }
      });
  }
}




