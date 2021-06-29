import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `<p> Logging out....</p>`,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private authStatus: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus.logout();
    this.router.navigate(["login"]);
  }
}
