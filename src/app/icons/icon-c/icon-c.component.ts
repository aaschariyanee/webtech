import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-icon-c',
  templateUrl: './icon-c.component.html',
  styleUrl: './icon-c.component.css'
})
export class IconCComponent {
  showWriting = false;

  constructor(public AuthService: AuthService) {}

  isAuthorized() {
    return this.AuthService.isAuthorized();
  }

  openNote() {
    if (this.isAuthorized()) {
      this.showWriting = !this.showWriting;
    }
  }
}
