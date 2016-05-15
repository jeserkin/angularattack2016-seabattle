import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {AngularFire} from 'angularfire2';
import {Router} from '@ngrx/router';

import {UserService} from "../shared/user/user.service";

@Component({
  selector: 'sb-signin',
  templateUrl: 'app/+signin/signin.component.html',
  styleUrls: ['app/+signin/signin.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class SigninComponent {
  email:string;
  password:string;

  constructor(public af:AngularFire, public user:UserService, private router:Router) {
  }

  public signIn() {
    let self = this;
    this.user.signIn(this.email, this.password)
      .then(function () {
        self.router.go('/');
      });
  }
}