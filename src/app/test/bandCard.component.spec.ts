import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BandCardComponent } from '../bandCard/bandCard.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<BandCardComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BandCardComponent
      ],
    }).compileComponents();
  }));


});


//TESTS
  //Render card
  //Button back con link
  //iframe con contenido
  //website con link
  //Crear lista falsa con id y datos, match
