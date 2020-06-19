import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BandCardComponent} from '../bandCard/bandCard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from "rxjs";
import {BandsService, Band} from "../services/bands.service";
import {SeoService} from "../services/seo.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ChangeDetectionStrategy} from "@angular/core";

describe('BandCardComponent', () => {

  let fixture: ComponentFixture<BandCardComponent>;
  let compiled;
  let bandCardComponent: BandCardComponent;
  let bandsService: BandsService;
  let seoService: SeoService;
  let activatedRoute: ActivatedRoute;
  let domSanitizer: DomSanitizer;

  const allRockBands : Array<Band> = [
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
          useValue: {snapshot: {params: {id: '2'}}}
        }
      ]
    }).overrideComponent(BandCardComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    }).compileComponents();
  }));

  describe('load the band card page', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(BandCardComponent);
      compiled = fixture.nativeElement;

      bandsService = TestBed.get(BandsService);
      seoService = TestBed.get(SeoService);
      domSanitizer = TestBed.get(DomSanitizer);
      activatedRoute = TestBed.get(ActivatedRoute);

      spyOn(bandsService, 'getBands').withArgs().and.returnValue(of(allRockBands));
      bandCardComponent = new BandCardComponent(bandsService, activatedRoute, domSanitizer, seoService);
    });

    it('should show the detail card band', () => {
      fixture.detectChanges();
      const card = compiled.querySelector('.bands');
      expect(card).toBeTruthy();
    });

    it('should show the go back button', () => {
      fixture.detectChanges();
      const backButton = compiled.querySelector('.back-button');
      expect(backButton).toBeTruthy();
      expect(backButton.getAttribute('routerLink')).toContain('/list');
    });

    it('should show website band link', () => {
      fixture.detectChanges();
      const contentCard = compiled.querySelector('.card-contain a');
      expect(contentCard).toBeTruthy();
    });

    it('should show only one band', () => {
      fixture.detectChanges();
      const bandName = compiled.querySelector('.card-title');
      expect(bandName.textContent).toContain("Led Zeppelin");
    });

    it('should show Led Zeppelin band', () => {
      fixture.detectChanges();
      const ledZeppelinBand = compiled.querySelectorAll('.data-band');
      expect(ledZeppelinBand[0].textContent).toContain("United Kingdom");
      expect(ledZeppelinBand[1].textContent).toContain("Whole lotta love");
      expect(ledZeppelinBand[2].textContent).toContain("Jimmy Page, Robert Plant, John Paul Jones, John Bonham");

      const bandWeb = compiled.querySelector('.web-band');
      expect(bandWeb.getAttribute('href')).toContain('https://lz50.ledzeppelin.com/?ref=https://es.wikipedia.org/');
      expect(compiled.querySelector('iframe').getAttribute('src')).toContain('https://www.youtube.com/embed/HQmmM_qwG4k');
      expect(compiled.querySelector('.band-image').getAttribute('src')).toContain('https://elpais.com/elpais/imagenes/2014/05/13/eps/1399982090_975034_1399998601_sumario_grande.jpg');
    });
  });
});

