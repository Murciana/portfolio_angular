import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
