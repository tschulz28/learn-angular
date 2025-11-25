import {Routes} from '@angular/router';

import {Home} from './home/home';
import {UserSite} from './user/user';

import {User} from './user.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserSite,
  },
];
