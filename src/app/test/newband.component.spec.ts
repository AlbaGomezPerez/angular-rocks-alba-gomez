import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewBandComponent } from '../newBand/newBand.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NewBandComponent
      ],
    }).compileComponents();
  }));
});

//TESTS
  //Render inputs
  //Button back con link
  //Button create con link
  //Crear lista falsa de allRocks y check se añade un objeto a la lista
