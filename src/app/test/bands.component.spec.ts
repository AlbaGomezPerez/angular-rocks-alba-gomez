import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BandsComponent} from '../bands/bands.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from "rxjs";
import {BandsService, Band} from "../services/bands.service";
import {SeoService} from "../services/seo.service";
import {FormsModule} from "@angular/forms";


describe('BandsComponent', () => {

  let fixture: ComponentFixture<BandsComponent>;
  let compiled;
  let bandsComponent: BandsComponent;
  let bandsService: BandsService;
  let seoService: SeoService;

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
        FormsModule
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

    spyOn(bandsService, 'getBands').and.returnValue(of(allRockBands));
    bandsComponent = fixture.componentInstance;
    bandsComponent.bandsService = bandsService;
    bandsComponent.ngOnInit();
    fixture.detectChanges();
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

  it('should show bands list with content', () => {
    const band = compiled.querySelectorAll('.band-row');
    expect(band.length).toEqual(3);

    const bandName = compiled.querySelectorAll('.card-title');
    expect(bandName[0].textContent).toContain("The Rolling Stones");
    expect(bandName[1].textContent).toContain("Led Zeppelin");
    expect(bandName[2].textContent).toContain("Queen");

    const imageName = compiled.querySelectorAll('.card-image img');
    expect(imageName[0].getAttribute('src')).toContain('https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/field/image/article/rolling-stones-conciertos-youtube.jpg?itok=Eo9OF1yD');
    expect(imageName[1].getAttribute('src')).toContain('https://elpais.com/elpais/imagenes/2014/05/13/eps/1399982090_975034_1399998601_sumario_grande.jpg');
    expect(imageName[2].getAttribute('src')).toContain('https://www.biografiasyvidas.com/biografia/q/fotos/queen.jpg');

    const removeband = compiled.querySelectorAll('.remove');
    expect(removeband[0].getAttribute('id')).toContain("1");
    expect(removeband[1].getAttribute('id')).toContain("2");
    expect(removeband[2].getAttribute('id')).toContain("3");

    const detailBand = compiled.querySelectorAll('.card-detail');

    expect(detailBand[0].getAttribute('href')).toContain("/band/1");
    expect(detailBand[1].getAttribute('href')).toContain('/band/2');
    expect(detailBand[2].getAttribute('href')).toContain('/band/3');
  });

  it('should show filtered bands by "lin" and find two bands', () => {
    bandsComponent.searchValue = "lin";
    bandsComponent.searchBands();
    fixture.detectChanges();
    const filteredBand = compiled.querySelectorAll('.card-title');
    expect(filteredBand[0].textContent).toContain("The Rolling Stones");
    expect(filteredBand[1].textContent).toContain("Led Zeppelin");
    expect(filteredBand.length).toBe(2);
  });

  it('should show filtered bands by "ZE" and find Led Zeppelin band', () => {
    bandsComponent.searchValue = "Z";
    bandsComponent.searchBands();
    fixture.detectChanges();
    const filteredBand = compiled.querySelector('.card-title');
    expect(filteredBand.textContent).toContain("Led Zeppelin");
  });

  it('should show filtered bands by "z" and find Led Zeppelin band', () => {
    bandsComponent.searchValue = "z";
    bandsComponent.searchBands();
    fixture.detectChanges();
    const filteredBand = compiled.querySelector('.card-title');
    expect(filteredBand.textContent).toContain("Led Zeppelin");
  });

  it('should show filtered bands by "ue" and find Queen band', () => {
    bandsComponent.searchValue = "ue";
    bandsComponent.searchBands();
    fixture.detectChanges();
    const filteredBand = compiled.querySelector('.card-title');
    expect(filteredBand.textContent).toContain("Queen");
  });
});


