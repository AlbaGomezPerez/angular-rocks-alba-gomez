import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NewBandComponent} from '../newBand/newBand.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BandsService} from "../services/bands.service";

describe('BandsComponent', () => {

  let fixture: ComponentFixture<NewBandComponent>;
  let compiled;
  let jsonService: BandsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        NewBandComponent
      ],
      providers: [
        BandsService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(NewBandComponent);
    compiled = fixture.nativeElement;

    jsonService = TestBed.get(BandsService);

  }));


  it('should show the form', () => {
    const form = compiled.querySelector('.all-form');
    expect(form).toBeTruthy();
  });

  it('should show the go back button', () => {
    const backButton = compiled.querySelector('.back-button');
    expect(backButton).toBeTruthy();
    expect(backButton.getAttribute('routerLink')).toContain('/list');
  });

  it('should show the inputs', () => {
    expect(compiled.querySelectorAll('input').length).toEqual(7);
  });

  it('should show create button with link', () => {
    const createButton = compiled.querySelector('button');
    expect(createButton.textContent).toContain("Create");
    expect(createButton.getAttribute('routerLink')).toContain('/');
  });
});



//TESTS
//Aparece formulario
//inputs
//Button volver
//Button crear
