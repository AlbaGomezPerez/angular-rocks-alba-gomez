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
    const defaultImage = "https://concepto.de/wp-content/uploads/2018/09/rock-e1536060138214.jpg";
    this.newBand.id = parseInt(this.idBand(100, 1000000).toFixed(0)) ;
    this.allRockBands.push(this.newBand);

    if(this.newBand.image === '') {
      return (
        this.newBand.image = defaultImage,
        this.newBand.name = "Band Name"
      )
    }
    this.updateDatabands(this.allRockBands);
  }

//recoge los datos servicio
  ngOnInit () {
    this.bandsService.getBands().subscribe(bands => {
      this.allRockBands = bands;
    });
  }

  //sube y actualiza los datos
  updateDatabands(updatedArrayBand: Array<Band>) {
    this.bandsService.updateBands(updatedArrayBand).subscribe({
      next: (bands: Array<Band>) => {
        // this.bandsService.getBands();
        this.allRockBands = bands;
      }
    });
  }



}




