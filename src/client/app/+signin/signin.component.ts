import { Component, Injectable } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { AngularFire } from 'angularfire2';
import { Router } from '@ngrx/router';

import { UserService } from "../shared/user/user.service";

@Component({
  selector: 'sb-signin',
  templateUrl: 'app/+signin/signin.component.html',
  styleUrls: ['app/+signin/signin.component.css'],
  directives: [FORM_DIRECTIVES]
})
@Injectable()
export class SigninComponent {
  email: string;
  password: string;
  constructor(public af: AngularFire, public user: UserService, private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  public signIn() {
    let router = this.router;

    this.user.signIn(this.email, this.password)
      .then(function() {
        router.go('/');
      });
    
    console.log(this.email);
    console.log(this.password);
    console.log('done');
  }
}