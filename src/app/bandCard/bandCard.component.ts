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

    this.idBand = this.route.snapshot.params['id'];
    this.dangerousUrl = '';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

  }

  ngOnInit() {
    // if(this.bandsService == undefined) {
      this.bandsService.getBands().subscribe(bands => {
        this.bandsService.bandsSource.next.bind(bands);
        this.band = bands.filter(band => band.id === parseInt(this.idBand)).shift();
        this.updateVideoUrl()
      });
    // }

  }

  updateVideoUrl() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.band.video);
  }

}
