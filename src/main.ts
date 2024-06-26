import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {ObrazComponent} from './obraz/obraz.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ObrazComponent, ],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  <app-obraz />

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
