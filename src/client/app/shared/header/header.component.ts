import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/index';

@Component({
  selector: 'sb-header',
  templateUrl: 'app/shared/header/header.component.html',
  styleUrls: ['app/shared/header/header.component.css'],
  directives: [NavbarComponent]
})
export class HeaderComponent {
  appTitle: string;
  constructor() {
    this.appTitle = '<%= APP_TITLE %>';
  }
}