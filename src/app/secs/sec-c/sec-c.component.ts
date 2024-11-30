import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sec-c',
  templateUrl: './sec-c.component.html',
  styleUrls: ['./sec-c.component.css']
})
export class SecCComponent {
  constructor(public AuthService: AuthService) {}
}
