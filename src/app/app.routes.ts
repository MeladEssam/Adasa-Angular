import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';
import { PostDetails } from './components/post-details/post-details';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  { path: 'blog/:slug', component: PostDetails },
  { path: 'about', component: About },
  { path: '**', component: NotFound },
];
