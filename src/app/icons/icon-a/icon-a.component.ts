import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-icon-a',
  templateUrl: './icon-a.component.html',
  styleUrl: './icon-a.component.css'
})
export class IconAComponent {
  target: string[] = ['#a'];

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.AuthService.authorized$.subscribe((isAuthorized) => {
      this.target = isAuthorized ? ['#f', '#g'] : ['#a'];
    });
  }

  async onClick(event: Event) {
    event.preventDefault();
    for (const id of this.target) {
      const targetid = document.querySelector(id);
      if (targetid) {
        targetid.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
