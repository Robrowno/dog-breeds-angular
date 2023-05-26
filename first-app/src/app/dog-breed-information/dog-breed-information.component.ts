import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dogbreeds } from '../dogbreeds';

@Component({
  selector: 'app-dog-breed-information',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      dog-breed-information works!
    </p>
  `,
  styleUrls: ['./dog-breed-information.component.css']
})
export class DogBreedInformationComponent {
  @Input() dogBreed!: Dogbreeds;
}
