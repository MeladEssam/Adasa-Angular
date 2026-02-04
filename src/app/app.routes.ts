import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';

import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  { path: 'about', component: About },
  { path: '**', component: NotFound },
];
