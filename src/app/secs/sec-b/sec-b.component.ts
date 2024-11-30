import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sec-b',
  templateUrl: './sec-b.component.html',
  styleUrls: ['./sec-b.component.css']
})
export class SecBComponent {
  constructor(public AuthService: AuthService) {}
}
