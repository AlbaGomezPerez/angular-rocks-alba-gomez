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

    generateTags(config) {
      config = {
        title: 'Angular Rocks',
        description: '70s Rock bands',
        image: '',
        slug:'',
        ...config
      }
      this.meta.addTags([
        {name: 'keywords', content:
            'rock, bands, band, Rolling Stones, Pink Floyd, The Ramones, ac/dc, Queen, kiss, Led Zeppelin, Deer Purple '},
        {name: 'title', content: config.title},
        {name: 'description', content: config.description},
        {name: 'slug', content: `localhost/${config.slug}`},
      ]);
    }
}








