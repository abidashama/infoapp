import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatFactComponent } from './cat-fact.component';
import { CatFactService } from '../services/cat-fact/cat-fact.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('CatFactComponent', () => {
  let component: CatFactComponent;
  let fixture: ComponentFixture<CatFactComponent>;
  let catFactService: CatFactService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CatFactComponent, HttpClientModule ],
      providers: [ CatFactService ]
    })
    .compileComponents();

    catFactService = TestBed.inject(CatFactService);
    spyOn(catFactService, 'getCatFactAndImage').and.returnValue(
      of([
        { fact: 'Mock cat fact' },
        [{ url: 'https://mock-cat-image.jpg' }]
      ])
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cat fact and image on initialization', () => {
    component.fetchCatFactAndImage();

    fixture.detectChanges();

    expect(catFactService.getCatFactAndImage).toHaveBeenCalled();
    expect(component.catFact).toBe('Mock cat fact');
    expect(component.catImageUrl).toBe('https://mock-cat-image.jpg');
    expect(component.loading).toBe(false);
  });
});