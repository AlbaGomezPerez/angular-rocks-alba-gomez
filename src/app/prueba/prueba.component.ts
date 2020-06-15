import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BandsComponent} from "../bands/bands.component";


/**
 * Show the bands
 */
@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit{
  allRockbands: BandsComponent;
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




