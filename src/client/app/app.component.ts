import { Component } from '@angular/core';

import { UserService, FooterComponent, HeaderComponent } from './shared/index';

@Component({
  selector: 'seabattle-app',
  providers: [UserService],
  templateUrl: 'app/app.component.html',
  directives: [FooterComponent, HeaderComponent]
})
export class AppComponent {}