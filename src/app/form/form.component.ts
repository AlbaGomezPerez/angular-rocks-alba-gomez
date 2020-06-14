import {Component} from '@angular/core';
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
export class FormComponent  {

  constructor () {}
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


  getDataForm () {
    this.newBand.id = this.idBand(100, 1000000).toFixed(0);
  }

  idBand(min, max) {
    return Math.random() * (max - min) + min;
  }
}




