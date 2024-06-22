import { TestBed } from '@angular/core/testing';
import { UniversityService } from './university.service';
import { University } from '../../models/university';
import { universities } from '../../mocks/universities.mock';

describe('UniversityService', () => {
  let service: UniversityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversityService]
    });

    service = TestBed.inject(UniversityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of universities', () => {
    service.getUniversities().subscribe((data: University[]) => {
      expect(data).toEqual(universities);
    });
  });
});
