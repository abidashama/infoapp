import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { University } from '../../models/university';
import { universities } from '../../mocks/universities.mock';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  //code for api call
  // private apiUrl = 'http://universities.hipolabs.com/search?country=Denmark';

  // constructor(private http: HttpClient) {}

  // getUniversities(): Observable<University[]> {
  //   return this.http.get<University[]>(this.apiUrl);
  // }

  getUniversities(): Observable<University[]> {
    return of(universities);
  }
}
