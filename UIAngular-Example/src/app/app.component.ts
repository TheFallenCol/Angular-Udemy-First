import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UIAngular-Example';
  _displayLogin: boolean = false;

  constructor(private authService: AuthService){
  }

  ngOnInit(): void {
    this.authService.authStatus.subscribe(authStatus => {
      const jwt = this.authService.getToken();
      setTimeout(() => {
        this._displayLogin = (this.authService.isValidToken(jwt));
      }, 0);
    });
  }

  get displayMenu(){
    return this._displayLogin;
  }
}
