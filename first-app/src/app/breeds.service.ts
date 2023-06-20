import { Injectable } from '@angular/core';
import { Dogbreeds } from './dogbreeds';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  // url to the dog breeds API
  url = 'http://localhost:3000/dogbreeds';

  async getAllDogBreeds(): Promise<Dogbreeds[]> {
    const response = await fetch(this.url);
    return await response.json() ?? [];
  }
  
  async getDogBreedById(id: number): Promise<Dogbreeds | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    return await response.json() ?? {};
  }

}
