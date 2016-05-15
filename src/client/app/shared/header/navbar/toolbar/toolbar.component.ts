import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';

import {UserService} from "../../../user/user.service";

@Component({
  selector: 'sb-toolbar',
  templateUrl: 'app/shared/header/navbar/toolbar/toolbar.component.html',
  styleUrls: ['app/shared/header/navbar/toolbar/toolbar.component.css']
})
export class ToolbarComponent {
  authenticated:boolean = false;
  userInfo:Object;

  constructor(public af:AngularFire, public user:UserService) {
    this.af.auth.subscribe(auth => {
      this.authenticated = auth !== null;
      this.userInfo = auth;
    });
  }

  public signOut() {
    this.user.signOut();
  }
}
