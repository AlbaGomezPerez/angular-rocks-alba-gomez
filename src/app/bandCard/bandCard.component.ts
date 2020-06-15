import { Component, OnInit } from '@angular/core';
import {Band, BandsService} from "../services/bands.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'card-band',
  templateUrl: './bandCard.component.html',
  styleUrls: ['./bandCard.component.css']
})
export class BandCardComponent implements OnInit{
  band: Band;
  idBand: string;
  dangerousUrl: string;
  trustedUrl: any;
  videoUrl: any;


  constructor(
    public bandsService: BandsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {

    this.idBand = this.route.snapshot.params['id']
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

  }

  ngOnInit() {
    this.bandsService.getBands().subscribe(bands => {
      this.band = bands.filter(band => band.id === parseInt(this.idBand)).shift();
      console.log(this.band.image);
      this.updateVideoUrl()
    });
  }

  updateVideoUrl() {
    this.band.video;
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.band.video);
  }

}
