import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

const template = `
<main>
  <a [routerLink]="['/']">
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
  </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: template,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
