import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(
    private appRoot: AppComponent
  ) { }

  toggleMenu(e) {
    this.appRoot.wrapper.nativeElement.classList.toggle('toggled');
    e.preventDefault();
  }
}
