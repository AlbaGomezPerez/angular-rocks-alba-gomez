import { Component, OnInit } from '@angular/core';
import {Band, BandsService} from "../services/bands.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {SeoService} from "../services/seo.service";

@Component({
  selector: 'card-band',
  templateUrl: './bandCard.component.html',
  styleUrls: ['./bandCard.component.css']
})


/**
  *Show the detail band card
*/
export class BandCardComponent implements OnInit{
  allRockBands: Array<Band>;
  band: Band;
  idBand: string;
  dangerousUrl: string;
  trustedUrl: any;
  videoUrl: any;



  constructor(
    public bandsService: BandsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private seoService: SeoService) {

    this.idBand = this.route.snapshot.params['id'];
    this.dangerousUrl = '';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

  }

  /**
   *Filter bands by the id and get selected band
   */
  ngOnInit() {
    // if(this.bandsService == undefined) {
    let bandList: Array<Band> = [];

    this.bandsService.getBands().subscribe(bands => {
        this.bandsService.bandsSource.next.bind(bands);
        this.allRockBands = bands;

        this.band = bands.filter(band => band.id === parseInt(this.idBand)).shift();

        bandList.push(this.band);

        this.updateVideoUrl();
        this.generateCardTags(bandList);
      });
    // }

  }

  /**
   *Add bypassSecurityTrustResourceUrl to iframe tag
   */
  updateVideoUrl() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.band.video);
  }

  /**
   * Get keywords from the seoService
   */
  generateCardTags(bandList) {
    this.seoService.generateTags({
      title: "Ng Seo - Rock bands website",
      description: "70s Rock bands",
      slug: 'Rock bands'
    }, bandList);
  }

}
