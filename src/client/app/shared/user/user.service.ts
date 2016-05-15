import {Injectable} from '@angular/core';
import {AngularFire, FirebaseAuthState} from 'angularfire2';

@Injectable()
export class UserService {
  constructor(public af:AngularFire) {
  }

  public signUp(email:string, password:string):Promise<FirebaseAuthData> {
    return this.af.auth.createUser({
      email: email,
      password: password
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  public signIn(email:string, password:string):Promise<FirebaseAuthState> {
    return this.af.auth.login({
      email: email,
      password: password
    }, {
      remember: 'sessionOnly'
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  public signOut() {
    this.af.auth.logout();
  }
}