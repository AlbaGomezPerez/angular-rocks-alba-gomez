import {assertPlatform, Injectable} from '@angular/core';
import {Meta} from  '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})


/**
 * Service to get data from the API
 */
export class SeoService {
  constructor( private meta: Meta) {}

  /**
   * Get allRockBands names and generate dinamic tags and default tags
   */
    generateTags(config, allRockBands) {
    const allRockBandsNames = allRockBands.map(band => {
      return band.name;
    }).join(', ');
      config = {
        title: 'Angular Rocks',
        description: '70s Rock bands',
        image: '',
        slug:'',
        ...config
      };
      this.meta.addTags([
        {name: 'keywords', content:
            `rock, bands, band, ${allRockBandsNames}` },
        {name: 'title', content: config.title},
        {name: 'description', content: config.description},
        {name: 'slug', content: `localhost/${config.slug}`},
      ]);
    }

  /**
   * Get rockBand data (name, title and members) and generate dinamic tags and default tags
   */
  generateCardTags(config, rockBand) {
    const rockBandName = rockBand.name;
    const rockBandSong = rockBand.title;
    const rockBandMembers = rockBand.members;
    config = {
      title: 'Angular Rocks',
      description: '70s Rock bands',
      image: '',
      slug:'',
      ...config
    };
    this.meta.addTags([
      {name: 'keywords', content:
          `rock, bands, band, ${rockBandName}, ${rockBandSong}, ${rockBandMembers}` },
      {name: 'title', content: config.title},
      {name: 'description', content: config.description},
      {name: 'slug', content: `localhost/${config.slug}`},
    ]);
  }
}








