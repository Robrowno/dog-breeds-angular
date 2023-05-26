import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dogbreeds } from '../dogbreeds';

@Component({
  selector: 'app-dog-breed-information',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="dogBreed.image" alt="Exterior photo of a {{dogBreed.name}}">
    <h2 class="listing-heading">{{ dogBreed.name }}</h2>
    <p class="listing-location">{{ dogBreed.description}}</p>
  </section>
  `,
  styleUrls: ['./dog-breed-information.component.css']
})
export class DogBreedInformationComponent {
  @Input() dogBreed!: Dogbreeds;
}
