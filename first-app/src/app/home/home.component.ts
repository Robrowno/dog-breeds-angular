import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogBreedInformationComponent } from '../dog-breed-information/dog-breed-information.component';
import { Dogbreeds } from '../dogbreeds';
import { BreedsService } from '../breeds.service';

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
    <app-dog-breed-information
      *ngFor="let dogBreed of dogBreedList"
    [dogBreed]="dogBreed">
    </app-dog-breed-information>
  </section>

  <section>
  <
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dogBreedList: Dogbreeds[] = [];
  breedsService: BreedsService = inject(BreedsService);

  constructor() {
    this.dogBreedList = this.breedsService.getAllDogBreeds();

}
}
