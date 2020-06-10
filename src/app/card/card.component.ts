import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-band',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() band: [];
  constructor() {

  }

  ngOnInit() {
  }
}
