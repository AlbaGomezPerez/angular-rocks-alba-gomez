import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BandCardComponent} from '../bandCard/bandCard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable, of} from "rxjs";
import {BandsService, Band} from "../services/bands.service";
import {SeoService} from "../services/seo.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

fdescribe('BandsComponent', () => {

  let fixture: ComponentFixture<BandCardComponent>;
  let compiled;
  let bandCardComponent: BandCardComponent;
  let bandsService: BandsService;
  let seoService: SeoService;
  let activatedRoute: ActivatedRoute;
  let domSanitizer: DomSanitizer;

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
        BandsService,
        SeoService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(BandCardComponent);
    compiled = fixture.nativeElement;

    bandsService = TestBed.get(BandsService);
    seoService = TestBed.get(BandsService);


    const rockBand = [
       {
        id: 1,
        name: "The Rolling Stones",
        country: "United Kingdom",
        website: "https://rollingstones.com/",
        members: "Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood",
        image: "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/rolling-stones-conciertos-youtube.jpg?itok=Eo9OF1yD",
        video: "https://www.youtube.com/embed/qEuV82GqQnE",
        title: "Ride 'em on down"
      } as Band
    ] as Array<Band>;

    const idBand = "1";

    bandCardComponent = new BandCardComponent(bandsService, activatedRoute, domSanitizer, seoService);
    bandCardComponent.bands = rockBand;
    bandCardComponent.band = rockBand[0];
    bandCardComponent.idBand = idBand;

    bandCardComponent.ngOnInit();
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

  it('should show only one band', () => {
    const bandName = compiled.querySelector('.card-title');
    expect(bandName.textContent).toContain("The Rolling Stones");
  });


});


//TESTS
  //Render card
  //Button back con link
  //iframe con contenido
  //website con link
  //Crear lista falsa con id y datos, match
