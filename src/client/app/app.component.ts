import { Component } from '@angular/core';

import { NameListService, FooterComponent, HeaderComponent } from './shared/index';

@Component({
  selector: 'seabattle-app',
  viewProviders: [NameListService],
  templateUrl: 'app/app.component.html',
  directives: [FooterComponent, HeaderComponent]
})
export class AppComponent {
}
