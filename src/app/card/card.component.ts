import { Component, OnInit } from '@angular/core';
import {Band, BandsService} from "../services/bands.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'card-band',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  band: Band;
  idBand: string;

  constructor(public bandsService: BandsService, private route: ActivatedRoute) {
    this.idBand = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.bandsService.getBands().subscribe(bands => {
      this.band = bands.filter(band => band.id === parseInt(this.idBand)).shift();
      console.log(this.band.image);
    });
  }

}
