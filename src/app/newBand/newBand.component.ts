import {Component, OnInit} from '@angular/core';
import {BandsService, Band} from "../services/bands.service";


/**
 * Show the bands
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

  idBand(min, max) {
    return Math.random() * (max - min) + min;
  }

  //datos formulario
  getDataForm () {
    this.newBand.id = parseInt(this.idBand(100, 1000000).toFixed(0)) ;

    this.allRockBands.push(this.newBand);

    this.updateDatabands(this.allRockBands);
    console.log(this.allRockBands);
  }

//recoge los datos servicio
  ngOnInit () {
    this.bandsService.getBands().subscribe(bands => {
      this.allRockBands = bands;
    });
    console.log('on');
  }

  //sube y actualiza los datos
  updateDatabands(updatedArrayBand: Array<Band>) {
    this.bandsService.updateBands(updatedArrayBand).subscribe({
      next: (bands: Array<Band>) => {
        // this.bandsService.getBands();
        this.allRockBands = bands;
        console.log('sube datos');
      }
    });
  }
}



