import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { NameListService } from '../shared/index';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/home.component.html',
  styleUrls: ['app/+home/home.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class HomeComponent {
  newName: string;
  items: FirebaseListObservable<any[]>;
  constructor(public nameListService: NameListService, af: AngularFire) {
    // create a list at /items
    this.items = af.database.list('/user/action');
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    //this.nameListService.add(this.newName);
    this.items.push({
      letter: 'A',
      number: this.newName
    });
    this.newName = '';
    return false;
  }
}
