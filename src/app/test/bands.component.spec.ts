import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BandsComponent } from '../bands/bands.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BandsComponent
      ],
    }).compileComponents();
  }));
});

//TESTS
    //Render nav/header
    //Button create (link form)
    //Button restore
    //bands list (crear una lista falsa y mirar lenght y el contenido)
