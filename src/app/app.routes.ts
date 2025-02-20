import { Routes } from '@angular/router';
import { P9Component } from './p9/p9.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticlesComponent } from './articles/articles.component';

export const routes: Routes = [
  {path: '', component: P9Component},
  {path: 'p9', component: P9Component},
  {path: 'home', component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'projects' , component: ProjectsComponent},
  {path: 'articles' , component: ArticlesComponent}
];
