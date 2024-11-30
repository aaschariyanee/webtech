import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AuthenLogComponent } from '../../authen/authen-log/authen-log.component';

@Component({
  selector: 'app-sec-e',
  templateUrl: './sec-e.component.html',
  styleUrl: './sec-e.component.css'
})
export class SecEComponent {
  @ViewChild(AuthenLogComponent) AuthenLogComponent!: AuthenLogComponent;
  
  constructor(public AuthService: AuthService) {}

  openLogin() {
    this.AuthenLogComponent.openLogin();
  }
}
