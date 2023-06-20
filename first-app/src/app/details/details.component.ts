import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreedsService } from '../breeds.service';
import { Dogbreeds } from '../dogbreeds';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>Details</h2>
<article class="details">
  <img class="dog-photo" [src]="dogBreed?.image" alt="Photo of a {{dogBreed?.name}}">
  <section class="dog-description">
    <h2 class="listing-heading">{{ dogBreed?.name }}</h2>
    <p class="dog-information">{{ dogBreed?.extendedDescription }}</p>
  </section>
</article>

`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  breedsService = inject(BreedsService);
  dogBreed: Dogbreeds | undefined;
  
  constructor() { 
    const dogBreedId = 
    parseInt(this.route.snapshot.paramMap.get('id') || '', 11);
    this.breedsService.getDogBreedById(dogBreedId).then((dogBreed) => {
      this.dogBreed = dogBreed;
    });

  }
}
