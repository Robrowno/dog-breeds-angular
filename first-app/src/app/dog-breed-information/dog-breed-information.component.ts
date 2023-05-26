import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dogbreeds } from '../dogbreeds';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dog-breed-information',
  standalone: true,
  imports: [
  CommonModule,
  RouterModule
],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="dogBreed.image" alt="Exterior photo of a {{dogBreed.name}}">
    <h2 class="listing-heading">{{ dogBreed.name }}</h2>
    <p class="listing-description">{{ dogBreed.description}}</p>
    <a [routerLink]="['/details', dogBreed.id]">Learn more</a>
  </section>
  `,
  styleUrls: ['./dog-breed-information.component.css']
})
export class DogBreedInformationComponent {
  @Input() dogBreed!: Dogbreeds;
}
