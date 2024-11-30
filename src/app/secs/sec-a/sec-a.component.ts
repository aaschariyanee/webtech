import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AuthenLogComponent } from '../../authen/authen-log/authen-log.component';

@Component({
  selector: 'app-sec-a',
  templateUrl: './sec-a.component.html',
  styleUrls: ['./sec-a.component.css']
})
export class SecAComponent {
  @ViewChild(AuthenLogComponent) AuthenLogComponent!: AuthenLogComponent;

  constructor(public AuthService: AuthService) {}

  openLogin() {
    this.AuthenLogComponent.openLogin();
  }
}
