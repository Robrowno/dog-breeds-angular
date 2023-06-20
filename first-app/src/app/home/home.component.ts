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
      <input type="text" placeholder="Filter by dog breed" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)" >Search</button>
    </form>
  </section>
  <section class="results">
    <app-dog-breed-information
      *ngFor="let dogBreed of filterDogBreedsList"
    [dogBreed]="dogBreed">
    </app-dog-breed-information>
  </section>

  <section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dogBreedList: Dogbreeds[] = [];
  filterDogBreedsList: Dogbreeds[] = [];
  breedsService: BreedsService = inject(BreedsService);

  constructor() {
    this.breedsService.getAllDogBreeds().then((dogBreedList: Dogbreeds[]) => {
      this.dogBreedList = dogBreedList;
      this.filterDogBreedsList = dogBreedList;
    });
  
}

  filterResults(text: string) {
    if (!text) {
      this.filterDogBreedsList = this.dogBreedList;
    }
    this.filterDogBreedsList = this.dogBreedList.filter((dogBreed) => {
      return dogBreed.name.toLowerCase().includes(text.toLowerCase());
    });

  } 
}
