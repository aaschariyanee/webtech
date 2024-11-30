import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-icon-d',
  templateUrl: './icon-d.component.html',
  styleUrl: './icon-d.component.css'
})
export class IconDComponent {
  showSetting = false;

  constructor(public AuthService: AuthService) {}

  isAuthorized() {
    return this.AuthService.isAuthorized();
  }

  openSetting() {
    if (this.isAuthorized()) {
      this.showSetting = !this.showSetting;
    }
  }
}
