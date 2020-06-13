import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  inputValue: string;

  constructor() {
  }

  buttonClick() {
    this.send.emit(this.inputValue)
  }

  ngOnInit(): void {}
}




