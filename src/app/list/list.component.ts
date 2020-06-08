import { Component, OnInit } from '@angular/core';


/**
 * Show the list with the starships with their values and percentage in a barchart
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  constructor() {
  }

  ships = [];
  shipAttribute = '';
  error = false;

  ngOnInit() {
    /**
     * llamar a la función hecha fuera de la api, este el component did mount
     */
  }


}


