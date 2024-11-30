import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-icon-e',
  templateUrl: './icon-e.component.html',
  styleUrl: './icon-e.component.css'
})
export class IconEComponent {
  constructor(public AuthService: AuthService) {}

  isAuthorized() {
    return this.AuthService.isAuthorized();
  }

  logout() {
    this.AuthService.logout();
  }
}
