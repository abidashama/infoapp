import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFactService } from '../services/cat-fact/cat-fact.service';

@Component({
  selector: 'app-cat-fact',
  standalone: true,
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.scss'],
  imports: [CommonModule]
})
export class CatFactComponent implements OnInit {
  catFact: string;
  catImageUrl: string;
  loading: boolean;

  constructor(private catFactService: CatFactService) {}

  ngOnInit(): void {
    this.fetchCatFactAndImage();
  }

  fetchCatFactAndImage() {
    this.loading = true;
    this.catFactService.getCatFactAndImage().subscribe(response => {
      this.catFact = response[0].fact;
      this.catImageUrl = response[1][0].url;
      this.loading = false;
    });
  }
}
