import {Component} from '@angular/core';


/**
 * Show the list
 */
@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  newBand = {};

  getDataForm () {
    const bandName = document.querySelector("#first_name").value;
    const bandCountry = document.querySelector("#country").value;
    const bandVideo = document.querySelector("#video").value;
    const bandSong = document.querySelector("#title").value;
    const bandImage = document.querySelector("#image").value;
    const bandMembers = document.querySelector("#members").value;

    function idBand(min, max) {
      return Math.random() * (max - min) + min;
    }

    this.newBand = {
      "id": idBand(50, 150).toFixed(0),
      "name": bandName,
      "country": bandCountry,
      "website": bandVideo,
      "members": bandMembers,
      "image": bandImage,
      "video": bandVideo,
      "title": bandSong
    };
    console.log(this.newBand);
  }
}




