import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BandCardComponent} from '../bandCard/bandCard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable, of} from "rxjs";
import {BandsService, Band} from "../services/bands.service";
import {BandsComponent} from "../bands/bands.component";

describe('BandsComponent', () => {

  let fixture: ComponentFixture<BandCardComponent>;
  let compiled;
  let jsonService: BandsService;
  let bandCardComponent: BandCardComponent;
  let apiResponse: Array<Band>;

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

    const band =
     {
            id: 1,
            name: "The Rolling Stones",
            country: "United Kingdom",
            website: "https://rollingstones.com/",
            members: "Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood",
            image: "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/rolling-stones-conciertos-youtube.jpg?itok=Eo9OF1yD",
            video: "https://www.youtube.com/embed/qEuV82GqQnE",
            title: "Ride 'em on down"
          } as Band;

    const idBand = 1;

      // spyOn(jsonService, 'getBands').and.returnValue(of(apiResponse));
      // bandCardComponent.ngOnInit();
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
