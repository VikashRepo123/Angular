import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logState!: any;
  constructor(private _auth: AuthService) { 
    _auth.isLoggedIn.subscribe(state=> this.logState = state);
  }

  ngOnInit(): void {
  }

  logoutFn() {
    this._auth.isLoggedIn.next(false);
  }

}
