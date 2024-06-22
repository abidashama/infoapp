import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() price: string;
  @Input() customContent: string;

  sanitizedContent: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizeContent();
  }

  sanitizeContent() {
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.customContent);
  }
}
