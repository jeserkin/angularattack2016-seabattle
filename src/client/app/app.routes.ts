import { Routes } from '@ngrx/router';

import { HomeComponent } from './+home/index';
import { AboutComponent } from './+about/index';
import { SigninComponent } from './+signin/index';
import { SignupComponent } from './+signup/index';

export const routes: Routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/signin',
    component: SigninComponent
  },
  {
    path: '/signup',
    component: SignupComponent
  }
];
