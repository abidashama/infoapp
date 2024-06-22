import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../services/university/university.service';
import { University } from '../models/university';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
  universities: University[] = [];
  currentIndex: number = 0;

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.universityService.getUniversities().subscribe(response => {
      this.universities = response;
    });
  }

  nextUniversity() {
    if (this.currentIndex < this.universities.length - 1) {
      this.currentIndex++;
    }
  }

  previousUniversity() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
