import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="app">
      <div class="container">
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styles: [
    '.app {display:flex;align-items: center; justify-content: center}',
    '.container {width: 1024px}',
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
