import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sec-d',
  templateUrl: './sec-d.component.html',
  styleUrl: './sec-d.component.css'
})
export class SecDComponent {
  constructor(public AuthService: AuthService) {}
}
