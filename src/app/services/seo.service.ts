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
    const allRockBandsData = allRockBands.map(band => {
      return band.members + ',' + band.title + ',' + band.name;
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
            `rock, bands, band, ${allRockBandsData}` },
        {name: 'title', content: config.title},
        {name: 'description', content: config.description},
        {name: 'slug', content: `localhost/${config.slug}`},
      ]);
    }

}








