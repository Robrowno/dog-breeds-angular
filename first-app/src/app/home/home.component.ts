import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogBreedInformationComponent } from '../dog-breed-information/dog-breed-information.component';
import { Dogbreeds } from '../dogbreeds';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    DogBreedInformationComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by dog breed">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-dog-breed-information [dogBreed]="dogBreed"></app-dog-breed-information>
  </section>

  <section>
  <
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dogBreed: Dogbreeds = {
    id: 100,
    name: 'Poodle',
    description: 'The poodle is a group of formal dog breeds, the Standard Poodle, Miniature Poodle and Toy Poodle. The origins of the poodles are still discussed with a dispute over whether the poodle descends from the old French Barbet breed or from Germany as a type of water dog.',
    image: './assets/dog_images/standard-poodle-dog.webp'
};
}
