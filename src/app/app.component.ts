import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { P9Component } from "./p9/p9.component";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticlesComponent } from './articles/articles.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    P9Component,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ArticlesComponent,
    FooterComponent
  ] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MLB-portfolio';
}
