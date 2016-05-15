import { Component, Injectable } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { AngularFire } from 'angularfire2';

import { UserService } from "../shared/user/user.service";

@Component({
  selector: 'sb-signup',
  templateUrl: 'app/+signup/signup.component.html',
  styleUrls: ['app/+signup/signup.component.css'],
  directives: [FORM_DIRECTIVES]
})
@Injectable()
export class SignupComponent {
  email: string;
  password: string;
  repassword: string;
  constructor(public af: AngularFire, public user: UserService) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  public signUp() {
    this.user.signUp(this.email, this.password);

    console.log(this.email);
    console.log(this.password);
    console.log(this.repassword);
  }
}