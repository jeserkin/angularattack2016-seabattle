import { Routes } from '@ngrx/router';

import { HomeComponent } from './+home/index';
import { AboutComponent } from './+about/index';

export const routes: Routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
];
