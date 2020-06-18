import { Component, OnInit } from '@angular/core';
import {Band, BandsService} from "../services/bands.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";
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
  allRockBands: Array<Band> = [];
  idBand: string;
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  videoUrl: SafeResourceUrl;
  band: Band = {
    country: '',
    id: null,
    image: '',
    members: '',
    name: '',
    title: '',
    video: '',
    website: '',
  };

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
    this.getBands();
  }

  getBands() {
    if(this.allRockBands.length == 0) {
      this.bandsService.getBands().subscribe((bands: Array<Band>) => {
        this.allRockBands = bands;
        this.band = bands.filter(band => band.id === parseInt(this.idBand)).shift();

        let bandList: Array<Band> = [];
        bandList.push(this.band);
        this.generateCardTags(bandList);

        this.updateVideoUrl();
      });
    }
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
