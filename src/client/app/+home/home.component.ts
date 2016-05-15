import { Component } from '@angular/core';

@Component({
  selector: 'sb-home',
  templateUrl: 'app/+home/home.component.html',
  styleUrls: ['app/+home/home.component.css']
})
export class HomeComponent {
  newName: string;
  //items: FirebaseListObservable<any[]>;
  constructor() {
    // create a list at /user/action
    //this.items = af.database.list('/user/action');
  }
}
