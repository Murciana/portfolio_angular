import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  // title!: string ;
  // projectType!: string ;
  // description!: string ;
  // githubLink!: string ;
  // image!: string ;

  projects: Project[] = [
    {
      title: "NASA Explorer",
      projectType: "Web App",
      description: "An interactive web app to explore NASA images.",
      githubLink: "https://github.com/user/nasa-explorer",
      image: "assets/img/portfolio/imageNASA1.jpg"
    },
    {
      title: "Van Gogh Gallery",
      projectType: "Art & Culture",
      description: "A digital gallery showcasing Van Gogh's masterpieces.",
      githubLink: "https://github.com/user/van-gogh-gallery",
      image: "assets/img/portfolio/van_gogh_cafe.jpg"
    },
    {
      title: "Portfolio Website",
      projectType: "Personal Website",
      description: "My personal developer portfolio with projects and blogs.",
      githubLink: "https://github.com/user/portfolio",
      image: "assets/img/portfolio/portfolio.jpg"
    }
  ];
  ngOnInit(): void {}
}
