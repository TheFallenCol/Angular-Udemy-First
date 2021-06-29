import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError : boolean = false;
  loginErrorMessage : string = '';
  loginFormGroup: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService, private router : Router) {
    this.loginFormGroup = fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]]
    });
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  login(submittedForm: FormGroup){
    this.authService.login(this.email?.value, submittedForm.get('password')?.value)
      .subscribe( authResponse => {
        this.router.navigate(['/home']);
      }, onError => {
        this.loginError = true;
        this.loginErrorMessage = onError;
      });
  }

  get email(){
    return this.loginFormGroup.get('email');
  }

  get password(){
    return this.loginFormGroup.get('password');
  }
}
