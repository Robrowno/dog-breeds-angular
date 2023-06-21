import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CommunityComponent } from './community/community.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { TrainingComponent } from './training/training.component';
import { AdoptionComponent } from './adoption/adoption.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Dog Breed Details'
    },
    {
      path: 'community',
      component: CommunityComponent,
      title: 'Community page'
    },
    {
      path: 'healthcare',
      component: HealthcareComponent,
      title: 'Healthcare page'
    },
    {
      path: 'training',
      component: TrainingComponent,
      title: 'Training page'
    },
    {
      path: 'adoption',
      component: AdoptionComponent,
      title: 'Adoption page'
    }
    
  ];
  
  export default routeConfig;