import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniversityComponent } from './university.component';
import { UniversityService } from '../services/university/university.service';
import { of } from 'rxjs';
import { University } from '../models/university';

describe('UniversityComponent', () => {
  let component: UniversityComponent;
  let fixture: ComponentFixture<UniversityComponent>;
  let universityService: jasmine.SpyObj<UniversityService>; // Mock type for UniversityService

  const mockUniversities: University[] = [
    { name: 'University 1', state: 'State 1', country: 'Country 1', alpha_code: 'AC1', website: 'http://example.com/uni1' },
    { name: 'University 2', state: null, country: 'Country 2', alpha_code: 'AC2', website: 'http://example.com/uni2' },
  ];

  beforeEach(async () => {
    const universityServiceSpy = jasmine.createSpyObj('UniversityService', ['getUniversities']);
    
    await TestBed.configureTestingModule({
      declarations: [ UniversityComponent ],
      providers: [
        { provide: UniversityService, useValue: universityServiceSpy }
      ]
    })
    .compileComponents();

    universityService = TestBed.inject(UniversityService) as jasmine.SpyObj<UniversityService>;
    universityService.getUniversities.and.returnValue(of(mockUniversities));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch universities', () => {
    expect(component.universities.length).toBe(mockUniversities.length);
    expect(universityService.getUniversities).toHaveBeenCalled(); 
  });

  it('should navigate to next university', () => {
    component.currentIndex = 0;
    const initialIndex = component.currentIndex;

    component.nextUniversity();
    expect(component.currentIndex).toBe(initialIndex + 1);
  });

  it('should navigate to previous university', () => {
    component.currentIndex = 1;
    const initialIndex = component.currentIndex;

    component.previousUniversity();
    expect(component.currentIndex).toBe(initialIndex - 1);
  });
});

