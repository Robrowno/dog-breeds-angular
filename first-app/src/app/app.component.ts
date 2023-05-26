import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
  <main>
    <header class="brand-name">
      <img class="paw-logo" src="/assets/paw-print.svg" alt="logo" aria-hidden="true">
      <h1>{{ title }}</h1>
    </header>
    <section class="content">
    <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dogs of the World';
}
