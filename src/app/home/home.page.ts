import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value = 'Click me in the middle of the input';

  constructor() {}

  callMe() {
    console.log('Called...');
  }

}
