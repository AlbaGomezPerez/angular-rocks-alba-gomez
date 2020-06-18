import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BandCardComponent} from '../bandCard/bandCard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable, of} from "rxjs";
import {BandsService, Band} from "../services/bands.service";
import {SeoService} from "../services/seo.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

describe('BandCardComponent', () => {

  let fixture: ComponentFixture<BandCardComponent>;
  let compiled;
  let bandCardComponent: BandCardComponent;
  let bandsService: BandsService;
  let seoService: SeoService;
  let activatedRoute: ActivatedRoute;
  let domSanitizer: DomSanitizer;

  const allRockBands = [
    {
      id: 1,
      name: "The Rolling Stones",
      country: "United Kingdom",
      website: "https://rollingstones.com/",
      members: "Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood",
      image: "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/rolling-stones-conciertos-youtube.jpg?itok=Eo9OF1yD",
      video: "https://www.youtube.com/embed/qEuV82GqQnE",
      title: "Ride 'em on down"
    },
    {
      id: 2,
      name: "Led Zeppelin",
      country: "United Kingdom",
      website: "https://lz50.ledzeppelin.com/?ref=https://es.wikipedia.org/",
      members: "Jimmy Page, Robert Plant, John Paul Jones, John Bonham",
      image: "https://elpais.com/elpais/imagenes/2014/05/13/eps/1399982090_975034_1399998601_sumario_grande.jpg",
      video: "https://www.youtube.com/embed/HQmmM_qwG4k",
      title: "Whole lotta love"
    },
    {
      id: 3,
      name: "Queen",
      country: "United Kingdom",
      website: "http://www.queenonline.com/es",
      members: "John Deacon, Freddie Mercury, Brian May, Roger Taylor",
      image: "https://www.biografiasyvidas.com/biografia/q/fotos/queen.jpg",
      video: "https://www.youtube.com/embed/kijpcUv-b8M",
      title: "Somebody to love"
    }
  ] as Array<Band>;


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
        SeoService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {id: '1'}}}
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(BandCardComponent);
    compiled = fixture.nativeElement;

    bandsService = TestBed.get(BandsService);
    seoService = TestBed.get(SeoService);
    domSanitizer = TestBed.get(DomSanitizer);
    activatedRoute = TestBed.get(ActivatedRoute);

    spyOn(bandsService, 'getBands').and.returnValue(of(allRockBands));
    bandCardComponent = new BandCardComponent(bandsService, activatedRoute, domSanitizer, seoService);
    fixture.detectChanges();
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
