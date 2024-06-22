import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CatFactService } from './cat-fact.service';

describe('CatFactService', () => {
  let service: CatFactService;
  let httpMock: HttpTestingController;

  const mockFact = { fact: 'Cats are great!' };
  const mockImage = [{ url: 'https://example.com/cat.jpg' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatFactService]
    });

    service = TestBed.inject(CatFactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a cat fact', () => {
    service.getCatFact().subscribe((fact) => {
      expect(fact).toEqual(mockFact);
    });

    const req = httpMock.expectOne(service['factApiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockFact);
  });

  it('should fetch a cat image', () => {
    service.getCatImage().subscribe((image) => {
      expect(image).toEqual(mockImage);
    });

    const req = httpMock.expectOne(service['imageApiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockImage);
  });

  it('should fetch a cat fact and image', () => {
    service.getCatFactAndImage().subscribe(([fact, image]) => {
      expect(fact).toEqual(mockFact);
      expect(image).toEqual(mockImage);
    });

    const factReq = httpMock.expectOne(service['factApiUrl']);
    expect(factReq.request.method).toBe('GET');
    factReq.flush(mockFact);

    const imageReq = httpMock.expectOne(service['imageApiUrl']);
    expect(imageReq.request.method).toBe('GET');
    imageReq.flush(mockImage);
  });
});
