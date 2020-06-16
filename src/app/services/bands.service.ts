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

  bandsSource = new BehaviorSubject([]);
  currentBands = this.bandsSource.asObservable();

  /**
   *Get bands from data base
   */
  getBands(){
      if( this.bandsSource.getValue().length == 0)
        return this.http.get<Array<Band>>(this.dataUrl);
      else
        return this.currentBands;
  }

  /**
   *Do the put to the data base
   *@param bands: response (band type array)
   */
  updateBands(bands: Array<Band>) {
      return this.http.put<Array<Band>>(this.dataUrl, JSON.stringify(bands));
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






