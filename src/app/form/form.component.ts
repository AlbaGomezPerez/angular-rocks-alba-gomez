import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BandsService, Band} from "../../app/list/bands.service";


/**
 * Show the list
 */
@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
    this.newBand.id = this.idBand(100, 1000000).toFixed(0);
    this.allRockBands.push(this.newBand);
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
        this.allRockBands = bands;
        console.log('sube datos');
      }
    });
  }
}




