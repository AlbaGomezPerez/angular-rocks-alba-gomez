import { Component, OnInit, Input } from '@angular/core';
import { ListComponent} from "../list/list.component";


/**
 * Show the list
 */
@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit{
  allRockbands: ListComponent;
  @Input() title: string;
  @Input() newName: string;
  constructor() {
  }

  ngOnInit(): void {}
}




