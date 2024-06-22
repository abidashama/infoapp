import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {
  private factApiUrl = 'https://catfact.ninja/fact';
  private imageApiUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) {}

  getCatFact(): Observable<any> {
    return this.http.get<any>(this.factApiUrl);
  }

  getCatImage(): Observable<any> {
    return this.http.get<any[]>(this.imageApiUrl);
  }

  getCatFactAndImage(): Observable<any[]> {
    return forkJoin([this.getCatFact(), this.getCatImage()]);
  }
}
