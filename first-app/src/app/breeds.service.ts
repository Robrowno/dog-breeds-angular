import { Injectable } from '@angular/core';
import { Dogbreeds } from './dogbreeds';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  protected dogBreedList: Dogbreeds[] = [
    {
    id: 0,
    name: 'Poodle',
    description: 'The poodle is a group of formal dog breeds, the Standard Poodle, Miniature Poodle and Toy Poodle. The origins of the poodles are still discussed with a dispute over whether the poodle descends from the old French Barbet breed or from Germany as a type of water dog.',
    image: './assets/dog_images/standard-poodle-dog.webp'
},
{
    id: 1,
    name: 'Labrador Retriever',
    description: 'The Labrador Retriever, often abbreviated to Labrador or Lab, is a medium-large gun dog from the United Kingdom that was developed from imported Canadian fishing dogs. The Labrador is one of the most popular dog breeds in a number of countries in the world, particularly in the Western world.',
    image: './assets/dog_images/standard-labrador-dog.jpeg'
}, 
{ 
    id: 2,
    name: 'Golden Retriever',
    description: 'The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed\'s ability to retrieve shot game undamaged due to their soft mouth.',
    image: './assets/dog_images/standard-golden-retriever-dog.jpeg'
},
{ 
  id: 3,
  name: 'Border Collie',
  description: 'The Border Collie is a working and herding dog breed developed in the Scottish borders for herding livestock, especially sheep. It was specifically bred for intelligence and obedience.',
  image: './assets/dog_images/standard-border-collie-dog.jpeg'
},
{ 
  id: 4,
  name: 'Chihuahua',
  description: 'The Chihuahua is the smallest breed of dog, and is named after the Mexican state of Chihuahua. Chihuahuas come in a wide variety of colors, and two coat lengths. The Chihuahua\'s history is puzzling and there are many theories surrounding the origin of the breed.',
  image: './assets/dog_images/standard-chihuahua-dog.jpeg'
},
{ 
  id: 5,
  name: 'Pug',
  description: 'The Pug is a breed of dog distinguished by a wrinkly, short-muzzled face and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles.',
  image: './assets/dog_images/standard-pug-dog.webp'
},
{ 
  id: 6,
  name: 'West Highland White Terrier',
  description: 'The West Highland White Terrier, commonly known as the Westie or colloquially the Westy, is a Scottish breed of dog with a distinctive white harsh coat with a somewhat soft white undercoat. It is a medium-sized terrier, although with longer legs than other Scottish breeds of terrier.',
  image: './assets/dog_images/standard-westie-dog.webp'
},
{ 
  id: 7,
  name: 'Siberian Husky',
  description: 'The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than a very similar-looking dog, the Alaskan Malamute.',
  image: './assets/dog_images/standard-siberian-husky-dog.webp'
},
{ 
  id: 8,
  name: 'German Shepherd',
  description: 'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. In the English language, the breed\'s officially recognized name is German Shepherd Dog. The breed was officially known as the Alsatian in the UK from after the First World War until 1977 when its name was changed back to German Shepherd.',
  image: './assets/dog_images/standard-german-shepherd-dog.webp'
},
{ 
  id: 9,
  name: 'Greyhound',
  description: 'The Greyhound is a breed of dog, a sighthound which has been bred for coursing game and Greyhound racing. Since the rise in large-scale adoption of retired racing Greyhounds, the breed has seen a resurgence in popularity as a family pet.',
  image: './assets/dog_images/standard-greyhound-dog.jpeg'
},
{ 
  id: 10,
  name: 'Irish Wolfhound',
  description: 'The Irish Wolfhound is a historic sighthound dog breed from Ireland that has by its presence and substantial size inspired literature, poetry and mythology. Like all sighthounds, it was used to pursue game by speed; it was also famed as a guardian dog, specializing in protection against and for the hunting of wolves.',
  image: './assets/dog_images/standard-irish-wolfhound-dog.jpeg'
},
{ 
  id: 11,
  name: 'Beagle',
  description: 'The Beagle is a breed of small hound that is similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare.',
  image: './assets/dog_images/standard-beagle-dog.webp'
},
  ];

  getAllDogBreeds(): Dogbreeds[] {
    return this.dogBreedList;
  }
  
  getDogBreedById(id: number): Dogbreeds | undefined {
    return this.dogBreedList.find(dogBreed => dogBreed.id === id);
  }
}
