import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sourceAuthorized = new BehaviorSubject<boolean>(false);
  authorized$ = this.sourceAuthorized.asObservable();

  constructor(
    private Router: Router,
    private StateService: StateService
  ) {}

  login() {
    this.sourceAuthorized.next(true);
  }

  logout() {
    this.sourceAuthorized.next(false);
    this.StateService.setReady(false);
    this.StateService.setChoose(null);
    this.StateService.setShowSecF(true);
    localStorage.removeItem('user_token');
    this.Router.navigate(['/login']);
  }

  isAuthorized() {
    return this.sourceAuthorized.getValue();
  }
}
