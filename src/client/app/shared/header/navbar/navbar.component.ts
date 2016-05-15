import { Component } from '@angular/core';

import { ToolbarComponent } from './toolbar/index';

@Component({
  selector: 'sb-navbar',
  templateUrl: 'app/shared/header/navbar/navbar.component.html',
  directives: [ToolbarComponent]
})
export class NavbarComponent {}
