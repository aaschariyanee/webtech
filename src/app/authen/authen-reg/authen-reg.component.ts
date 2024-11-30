import { Component } from '@angular/core';

@Component({
  selector: 'app-authen-reg',
  templateUrl: './authen-reg.component.html',
  styleUrl: './authen-reg.component.css'
})
export class AuthenRegComponent {
  showLogin = false;
  showRegis = false;
  email: string = '';
  password: string = '';

  closeRegis() {
    this.showRegis = false;
  }

  closeLogin() {
    this.showLogin = false;
  }

  auth(form: string) {
    if (form === 'login') {
      this.showRegis = false;
      this.showLogin = true;
    } else if (form === 'register') {
      this.showLogin = false;
      this.showRegis = true;
    }
  }

  submit() {
  }
}