import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {AngularFire} from 'angularfire2';
import {Router} from '@ngrx/router';

import {UserService} from "../shared/user/user.service";

@Component({
  selector: 'sb-signup',
  templateUrl: 'app/+signup/signup.component.html',
  styleUrls: ['app/+signup/signup.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class SignupComponent {
  email:string;
  password:string;
  repassword:string;

  constructor(public af:AngularFire, public user:UserService, private router:Router) {
  }

  public signUp() {
    let self = this;
    this.user.signUp(this.email, this.password)
      .then(function () {
        return self.user.signIn(self.email, self.password);
      })
      .then(function () {
        self.router.go('/');
      });
  }
}