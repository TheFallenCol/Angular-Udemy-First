import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UIAngular-Example';
  _displayLogin: boolean = false;

  get displayMenu(){
    return this._displayLogin;
  }
}
