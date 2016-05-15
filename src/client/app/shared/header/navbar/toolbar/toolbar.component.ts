import { Component, Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {UserService} from "../../../user/user.service";

@Component({
  selector: 'sb-toolbar',
  templateUrl: 'app/shared/header/navbar/toolbar/toolbar.component.html'
})
@Injectable()
export class ToolbarComponent {
  authenticated: boolean = false;
  constructor(public af:AngularFire, public user: UserService) {
    this.af.auth.subscribe(auth => (this.authenticated = auth !== null));
  }

  public signOut() {
    this.user.signOut();
  }
}
