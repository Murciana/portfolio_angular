import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { P9Component } from "./p9/p9.component";
import { TestComponenComponent } from "./test-componen/test-componen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [P9Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-portfolio';
}
