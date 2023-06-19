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
    extendedDescription: `Poodles, originating from Germany and standardized in France, are known for their elegance, intelligence, and excellent swimming ability. They come in three sizes - standard, miniature, and toy, but all maintain the breed's distinctive hypoallergenic curly coat. Their intelligence and ease of training have led to Poodles being used in circuses throughout history and also as service dogs in modern times. They are generally friendly dogs and get along well with other animals and children. Their active nature requires regular exercise to keep them healthy and happy. Some common health problems that can affect the breed include hip dysplasia, epilepsy, and certain types of eye diseases.`,
    image: './assets/dog_images/standard-poodle-dog.webp'
},
{
    id: 1,
    name: 'Labrador Retriever',
    description: 'The Labrador Retriever, often abbreviated to Labrador or Lab, is a medium-large gun dog from the United Kingdom that was developed from imported Canadian fishing dogs. The Labrador is one of the most popular dog breeds in a number of countries in the world, particularly in the Western world.',
    extendedDescription: `Labrador Retrievers, often called "Labradors" or "Labs", are friendly, outgoing dogs that originate from Newfoundland, Canada. Known for their even temper, intelligence, and agility, Labs are commonly used as guide dogs and in search-and-rescue operations. They were bred for retrieving game both in water and on land due to their love for water and their dense, short coats that resist weather. Labs are very friendly and great with kids, making them popular family pets. They have a large appetite and love to chew, so a balanced diet and plenty of chew toys are necessary. Some health issues that can affect the breed include obesity, hip and elbow dysplasia, and heart disorders.`,
    image: './assets/dog_images/standard-labrador-dog.jpeg'
}, 
{ 
    id: 2,
    name: 'Golden Retriever',
    description: 'The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed\'s ability to retrieve shot game undamaged due to their soft mouth.',
    extendedDescription: `Golden Retrievers are one of the world's most popular dog breeds, known for their friendly and tolerant attitudes. These medium-large dogs possess a dense, water-repellent wavy coat that comes in various shades of golden. Their kind and intelligent eyes are a distinctive feature of the breed. Developed in 19th century Britain for retrieving game during hunts, they have an innate love for water and can be easily trained to different obedience standards. They are ranked as the fourth most intelligent dog breed, which, coupled with their problem-solving abilities, makes them suitable for roles such as guide dogs, hearing dogs, hunting dogs, detection dogs, and participants in search and rescue operations. Their friendly nature makes them great family pets and excellent companions for children, though it means they do not excel as guard dogs. Golden Retrievers are generally healthy but are prone to certain health issues such as hip dysplasia, eye diseases, heart disease, and obesity. Regular exercise and a balanced diet help maintain their health. Despite potential health issues, they are adored for their friendly and tolerant attitudes, making them a wonderful addition to many households. The average lifespan of a Golden Retriever is around 10-12 years.`,
    image: './assets/dog_images/standard-golden-retriever-dog.jpeg'
},
{ 
  id: 3,
  name: 'Border Collie',
  description: 'The Border Collie is a working and herding dog breed developed in the Scottish borders for herding livestock, especially sheep. It was specifically bred for intelligence and obedience.',
  extendedDescription: `Border Collies are highly energetic dogs, known for their intelligence and instinctive desire to work. Originating from the border region between England and Scotland (hence their name), they were bred for herding livestock. Border Collies are extremely intelligent and responsive, known to excel in canine sports and obedience competitions. They are generally good with children and other pets, but their high energy levels and need for mental stimulation mean they are not suitable for everyone. They require plenty of exercises, and a job to do if possible, to prevent boredom. Some health conditions seen in the breed include hip dysplasia, collie eye anomaly, and certain types of allergies and skin conditions.`,
  image: './assets/dog_images/standard-border-collie-dog.jpeg'
},
{ 
  id: 4,
  name: 'Chihuahua',
  description: 'The Chihuahua is the smallest breed of dog, and is named after the Mexican state of Chihuahua. Chihuahuas come in a wide variety of colors, and two coat lengths. The Chihuahua\'s history is puzzling and there are many theories surrounding the origin of the breed.',
  extendedDescription: `Chihuahuas are the smallest breed of dog, originating from Mexico. They are named after the Mexican state of Chihuahua. These tiny dogs are known for their big personalities, alertness, and loyalty to their owners. Chihuahuas are generally low maintenance, requiring less exercise and grooming compared to larger breeds. However, they love being close to their people and can become quite attached. Their small size means they can be easily injured, so they're not typically recommended for families with very young children. Some potential health issues include heart problems, patellar luxation, and dental issues due to their small mouths.`,
  image: './assets/dog_images/standard-chihuahua-dog.jpeg'
},
{ 
  id: 5,
  name: 'Pug',
  description: 'The Pug is a breed of dog distinguished by a wrinkly, short-muzzled face and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles.',
  extendedDescription: `Pugs are small dogs known for their wrinkled faces and curled tails. Originating from China, they were prized by the Emperors of China and lived a luxurious life in the Chinese court. Pugs are known for being sociable, gentle, and willing to please, which makes them great family pets. Despite their small size, they are quite sturdy and love to play. Pugs do not handle heat very well and are prone to certain health issues, such as brachycephalic syndrome (due to their short noses), hip dysplasia, and obesity. Regular exercise, a healthy diet, and regular vet checks are crucial for this breed.`,
  image: './assets/dog_images/standard-pug-dog.webp'
},
{ 
  id: 6,
  name: 'West Highland White Terrier',
  description: 'The West Highland White Terrier, commonly known as the Westie or colloquially the Westy, is a Scottish breed of dog with a distinctive white harsh coat with a somewhat soft white undercoat. It is a medium-sized terrier, although with longer legs than other Scottish breeds of terrier.',
  extendedDescription: `West Highland White Terriers, also known as 'Westies', are small, sturdy dogs known for their distinctive white coat and friendly personality. Originating from Scotland, they were bred for hunting and ratting, and their strong prey drive still exists today. Westies have a lot of energy and enjoy playing and exploring, but they are also happy to relax with their owners. They are generally good with children and can get along with other dogs if properly socialized. Their double coat requires regular grooming to keep it looking its best. Some health conditions seen in the breed include skin disorders, hip dysplasia, and Legg-Calve-Perthes disease.`,
  image: './assets/dog_images/standard-westie-dog.webp'
},
{ 
  id: 7,
  name: 'Siberian Husky',
  description: 'The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than a very similar-looking dog, the Alaskan Malamute.',
  extendedDescription: `Siberian Huskies are medium-sized dogs known for their striking blue or multicolored eyes, wolf-like features, and energetic nature. They were bred by the Chukchi people of northeastern Asia to pull sleds over long distances in extreme Arctic conditions. Huskies are known for being friendly and gentle, as well as intelligent, but their strong-willed nature can make them challenging to train. They are generally healthy dogs, but some can suffer from genetic disorders like hip dysplasia and eye conditions. Their thick coat requires regular grooming, especially during shedding seasons.`,
  image: './assets/dog_images/standard-siberian-husky-dog.webp'
},
{ 
  id: 8,
  name: 'German Shepherd',
  description: 'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. In the English language, the breed\'s officially recognized name is German Shepherd Dog. The breed was officially known as the Alsatian in the UK from after the First World War until 1977 when its name was changed back to German Shepherd.',
  extendedDescription: `German Shepherds are large, active dogs, originally bred in Germany for herding sheep. Known for their intelligence, versatility, and courage, they are commonly used in roles such as guide dogs, police dogs, and search-and-rescue dogs. They are protective of their families and are known to be wary of strangers, which makes them excellent guard dogs. Despite their robust nature, they are prone to a few health issues, including hip and elbow dysplasia, gastric torsion, and certain types of skin allergies.`,
  image: './assets/dog_images/standard-german-shepherd-dog.webp'
},
{ 
  id: 9,
  name: 'Greyhound',
  description: 'The Greyhound is a breed of dog, a sighthound which has been bred for coursing game and Greyhound racing. Since the rise in large-scale adoption of retired racing Greyhounds, the breed has seen a resurgence in popularity as a family pet.',
  extendedDescription: `Greyhounds are best known for their impressive speed, having been bred for hunting and racing. Despite this, they are often gentle, quiet, and somewhat lazy dogs that enjoy relaxing. They have a short, easy-care coat and come in a variety of colors. Their thin skin and low body fat mean they are more sensitive to temperature extremes. Although generally healthy, they are prone to bloat, and their thin skin can easily get cut or scraped.`,
  image: './assets/dog_images/standard-greyhound-dog.jpeg'
},
{ 
  id: 10,
  name: 'Irish Wolfhound',
  description: 'The Irish Wolfhound is a historic sighthound dog breed from Ireland that has by its presence and substantial size inspired literature, poetry and mythology. Like all sighthounds, it was used to pursue game by speed; it was also famed as a guardian dog, specializing in protection against and for the hunting of wolves.',
  extendedDescription: `Irish Wolfhounds are the tallest breed of dog. These gentle giants were originally bred for hunting wolves and elk in Ireland. Despite their size and strength, they are known for their gentle, friendly nature and patience with children. They require plenty of space due to their size, but do not need as much exercise as some other breeds. Their rough coat requires regular brushing to prevent matting. They are prone to certain health issues common in large breeds, such as hip dysplasia and gastric torsion, and have a shorter lifespan compared to smaller breeds.`,
  image: './assets/dog_images/standard-irish-wolfhound-dog.jpeg'
},
{ 
  id: 11,
  name: 'Beagle',
  description: 'The Beagle is a breed of small hound that is similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare.',
  extendedDescription: `Beagles are small to medium-sized dogs known for their distinctive howl and strong sense of smell. Originally bred for hunting, they are now popular family pets due to their friendly, tolerant nature. They are generally good with other pets and children. Their short coat is easy to care for, and their size makes them suitable for both apartments and houses. However, their strong instinct to follow scents can lead them to escape if they catch an interesting smell. Some common health problems include obesity, epilepsy, and certain types of eye and ear issues.`,
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
