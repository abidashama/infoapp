import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductContainerComponent } from "./product-container/product-container.component";
import { CatFactComponent } from "./cat-fact/cat-fact.component";
import { UniversityModule } from './university/university.module';
import { CatFactService } from './services/cat-fact/cat-fact.service';
import { UniversityService } from './services/university/university.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductContainerComponent, CatFactComponent, UniversityModule, HttpClientModule],
    providers: [CatFactService, UniversityService]
})
export class AppComponent {
  title = 'infoapp';
}
