import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BandCardComponent} from '../bandCard/bandCard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BandsService} from "../services/bands.service";

describe('BandsComponent', () => {

  let fixture: ComponentFixture<BandCardComponent>;
  let compiled;
  let jsonService: BandsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        BandCardComponent
      ],
      providers: [
        BandsService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(BandCardComponent);
    compiled = fixture.nativeElement;

    jsonService = TestBed.get(BandsService);

  }));

  it('should show the detail card band', () => {
    const card = compiled.querySelector('.bands');
    expect(card).toBeTruthy();
  });

  it('should show the go back button', () => {
    const backButton = compiled.querySelector('.back-button');
    expect(backButton).toBeTruthy();
    expect(backButton.getAttribute('routerLink')).toContain('/list');
  });

  it('should show the go back button', () => {
    const contentCard = compiled.querySelector('.card-contain a');
    expect(contentCard).toBeTruthy();
    // expect(contentCard.getAttribute('href')).toContain("");/
  });


});


//TESTS
  //Render card
  //Button back con link
  //iframe con contenido
  //website con link
  //Crear lista falsa con id y datos, match
