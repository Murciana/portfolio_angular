import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-p9',
  standalone: true,
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './p9.component.html',
  styleUrl: './p9.component.scss'
})
export class P9Component  {
  // view: string = 'home';
  // view: string = 'about';
  view: string = 'project';


  handleView(selectedView: string) {
    this.view = selectedView;
  }
}
