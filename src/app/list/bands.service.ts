import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


/**
 * Service to get data from the API
 */
export class BandsService {
  constructor(private http: HttpClient) {}

  dataUrl = 'https://angular-rocks.firebaseio.com/bands.json';

  getBands(){
    return this.http.get<Array<Band>>(this.dataUrl)
  }

  updateBands(bands: Array<Band>) {
    return this.http.put<Array<Band>>(this.dataUrl, JSON.stringify(bands));
  }
}


/**
 * Define data types to Starship object
 */
export interface Band {
  country: string;
  id: number;
  name: string;
  title: string;
  video: string;
  image: string;
  website: string;
}






