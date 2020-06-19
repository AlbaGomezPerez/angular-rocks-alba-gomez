import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BandCardComponent} from '../bandCard/bandCard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from "rxjs";
import {BandsService, Band} from "../services/bands.service";
import {SeoService} from "../services/seo.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

describe('BandCardComponent inexistent', () => {

  let fixture: ComponentFixture<BandCardComponent>;
  let compiled;
  let bandCardComponent: BandCardComponent;
  let bandsService: BandsService;
  let seoService: SeoService;
  let activatedRoute: ActivatedRoute;
  let domSanitizer: DomSanitizer;

  const rockBand : Band = {
    id: 2,
    name: "Led Zeppelin",
    country: "United Kingdom",
    website: "https://lz50.ledzeppelin.com/?ref=https://es.wikipedia.org/",
    members: "Jimmy Page, Robert Plant, John Paul Jones, John Bonham",
    image: "https://elpais.com/elpais/imagenes/2014/05/13/eps/1399982090_975034_1399998601_sumario_grande.jpg",
    video: "https://www.youtube.com/embed/HQmmM_qwG4k",
    title: "Whole lotta love"
  };


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
          useValue: {snapshot: {params: {id: '99'}}}
        }
      ]
    }).compileComponents();
  }));

  describe('load the message error in card page', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(BandCardComponent);
      compiled = fixture.nativeElement;

      bandsService = TestBed.get(BandsService);
      seoService = TestBed.get(SeoService);
      domSanitizer = TestBed.get(DomSanitizer);
      activatedRoute = TestBed.get(ActivatedRoute);

      spyOn(bandsService, 'getBands').and.returnValue(of([]));
      bandCardComponent = fixture.componentInstance;
      bandCardComponent.bandsService = bandsService;
    });

    it('should show a message when there is not band', () => {
      fixture.detectChanges();
      const filteredBand = compiled.querySelector('.error-message');
      expect(filteredBand.textContent).toContain("Band not found");
    });
  });
});
