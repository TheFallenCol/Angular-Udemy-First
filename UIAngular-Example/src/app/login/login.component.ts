import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError : boolean = false;
  loginErrorMessage : string = '';
  loginFormGroup: FormGroup;

  constructor(private fb:FormBuilder) {
    this.loginFormGroup = fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]]
    });
  }

  ngOnInit(): void {
  }

  login(submittedForm: FormGroup){
    debugger;
  }

  get email(){
    return this.loginFormGroup.get('email');
  }

  get password(){
    return this.loginFormGroup.get('password');
  }
}
