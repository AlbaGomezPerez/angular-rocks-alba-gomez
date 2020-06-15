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

  private bandsSource = new BehaviorSubject([]);
  private currentBands = this.bandsSource.asObservable();

  getBands(){
    this.currentBands.subscribe(bands=> {
      console.log('5. current');
      if(bands.length == 0) {
        this.http.get<Array<Band>>(this.dataUrl).subscribe(originalBands => {
          this.bandsSource.next(originalBands);
        })
      }
    })
    console.log('4. current');
    return this.currentBands;
  }

  updateBands(bands: Array<Band>) {
    console.log('3. put service');
      return this.http.put<Array<Band>>(this.dataUrl, JSON.stringify(bands)).subscribe(originalBands => {
        this.bandsSource.next(originalBands);
        return this.getBands();
      })

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
  members: string;
}






