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
    {{dogBreed?.id}}
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  breedsService = inject(BreedsService);
  dogBreed: Dogbreeds | undefined;
  
  constructor() { 
    const dogBreedId = 
    // Number(this.route.snapshot.params['id']);
    // this.breedsService.getDogBreedById(dogBreedId);
    Number(this.route.snapshot.params['id']); 
    this.dogBreed = this.breedsService.getDogBreedById(dogBreedId);
    
  }
}
