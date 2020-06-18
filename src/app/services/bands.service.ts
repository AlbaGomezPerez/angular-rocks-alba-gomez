import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})


/**
 * Service to get data from the API
 */

export class BandsService {
  constructor(private http: HttpClient) {}

  dataUrl = 'https://angular-rocks.firebaseio.com/bands.json';
  bandUrl = 'https://angular-rocks.firebaseio.com/bands/';

  /**
   *Get bands from data base
   */
  getBands(){
      return this.http.get<Array<Band>>(this.dataUrl);
  }

  /**
   * Get band by its ID from data base
   * @param id band id to get
   */
  getBand(id: string){
    return this.http.get<Band>(this.bandUrl + id + '.json');
  }

  /**
   * Do the put to the data base
   * @param bands: response (band type array)
   */
  updateBands(bands: Array<Band>) {
      return this.http.put<Array<Band>>(this.dataUrl, JSON.stringify(bands));
  }

  /**
   * Delete a band given by Id
   * @param id band id to remove
   */
  deleteBand(id: string) {
    return this.http.delete(this.bandUrl + id + '.json');
  }
}


/**
 * Define the Band object type
 */
export interface Band {
  country: string;
  id: number;
  name: string;
  title: string;
  video: string;
  image: string;
  website: string;
  members: string;
}






