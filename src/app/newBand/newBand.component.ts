import {Component, OnInit} from '@angular/core';
import {BandsService, Band} from "../services/bands.service";


/**
 * Show the form to create a new band
 */
@Component({
  selector: 'form',
  templateUrl: './newBand.component.html',
  styleUrls: ['./newBand.component.css']
})
export class NewBandComponent implements OnInit {
  allRockBands: Array<Band>;

  constructor (public bandsService: BandsService) {}
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

  /**
   *Generate random id
   */
  idBand(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   *Get data band created by the user
   */
  getDataForm () {
    console.log(this.allRockBands);
    const defaultImage = "https://concepto.de/wp-content/uploads/2018/09/rock-e1536060138214.jpg";
    this.newBand.id = parseInt(this.idBand(100, 1000000).toFixed(0)) ;
    this.allRockBands.push(this.newBand);
    console.log('adios');

    // if(this.newBand.image === '') {
    //   return (
    //     this.newBand.image = defaultImage,
    //     this.newBand.name = "Band Name"
    //   )
    // }

    this.updateDatabands(this.allRockBands);
  }

  /**
   *Update allRockBands and bandsService
   */
  ngOnInit () {
   console.log(this.allRockBands);
    // if(this.allRockBands == undefined) {
      this.bandsService.getBands().subscribe(bands => {
        this.bandsService.bandsSource.next.bind(bands);
        this.allRockBands = bands;
      });
    // }
  }

  /**
   *Update data base and update state
   *@param updatedArrayBand: objects array (Band type)
   * next: indicate the type of response and update the state again
   */
  updateDatabands(updatedArrayBand: Array<Band>) {
    console.log('hola');
      this.bandsService.updateBands(updatedArrayBand).subscribe({
        next: (bands: Array<Band>) => {
          console.log('entro');
          this.bandsService.bandsSource.next.bind(bands);
          this.allRockBands = bands;
        }
      });


  }
}




