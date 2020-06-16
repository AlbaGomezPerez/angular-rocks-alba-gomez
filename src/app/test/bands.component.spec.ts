import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BandsComponent} from '../bands/bands.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable, of} from "rxjs";
import {BandsService, Band} from "../services/bands.service";
import {SeoService} from "../services/seo.service";
import {Title} from "@angular/platform-browser";


fdescribe('BandsComponent', () => {

  let fixture: ComponentFixture<BandsComponent>;
  let compiled;
  let bandsComponent: BandsComponent;
  let bandsService: BandsService;
  let seoService: SeoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        BandsComponent
      ],
      providers: [
        BandsService,
        SeoService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(BandsComponent);
    compiled = fixture.nativeElement;

    bandsService = TestBed.get(BandsService);
    seoService = TestBed.get(SeoService);


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

    //spyOn(bandsService, 'getBands').and.returnValue(of(allRockBands));
    bandsService.bandsSource.next(allRockBands);
    bandsComponent = new BandsComponent(bandsService, seoService);
    bandsComponent.ngOnInit();
  }));


  it('should show the nav with its search input and buttons', () => {
    const nav = compiled.querySelector('.nav-wrapper');
    expect(nav).toBeTruthy();

    const createButton = compiled.querySelectorAll('.action-button');
    expect(createButton[0].textContent).toContain("Create new rock band");
    expect(createButton[1].textContent).toContain("Restore rock bands");

    const inputSearch = compiled.querySelector('#search');
    expect(inputSearch).toBeTruthy();
  });

  fit('should show list with rows', () => {
    fixture.detectChanges();
    console.info('foo');
    expect(compiled.querySelectorAll('.row').length).toEqual(3);
  });
});



//TESTS
    //bands list (crear una lista falsa y mirar lenght y el contenido)
      //imagen
      //nombre
      //iconos con sus links
