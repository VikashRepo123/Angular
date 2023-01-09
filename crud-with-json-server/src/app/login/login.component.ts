import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logState!: any;
  constructor(private router: Router, private _auth: AuthService) { 
    _auth.isLoggedIn.subscribe(state=> this.logState = state);
  }

  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [Validators.required, Validators.minLength(4)])
    });

    // this.loginForm.setValue({
    //   email: 'dumy@gmail.com',
    //   pass: 1234
    // })
  }

  users: any[] = [
    {email: 'admin@admin.com', pass: '12345'}
  ]

  onSubmit() {
    if(this.loginForm.controls['email'].errors || this.loginForm.controls['pass'].errors) { // if "errors: null", then will false
      console.log('Has error');
      return;
    }
    
    console.log(this.loginForm.value);
    if(this.loginForm.value.email && this.loginForm.value.pass) {
      alert('Login successfull.')
      this._auth.isLoggedIn.next(!this.logState);
      localStorage.setItem('token', 'akakakaka');

      this.router.navigate(['admin-dashboard']);
    }
  }

  onSignUp() {
    localStorage.setItem('token', 'akakakaka');
  }

}
