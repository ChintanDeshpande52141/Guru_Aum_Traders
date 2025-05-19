import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  showGoTop = false;
  constructor() {}
  ngOnInit() {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showGoTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
  }
}
