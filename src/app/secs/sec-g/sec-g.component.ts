import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { StateService } from '../../services/state/state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sec-g',
  templateUrl: './sec-g.component.html',
  styleUrl: './sec-g.component.css'
})
export class SecGComponent implements OnInit, OnDestroy {
  ready: boolean = false;
  choose: any;
  showSecF: boolean = true;
  private Subscription: Subscription | null = null;

  constructor(
    public AuthService: AuthService, 
    private StateService: StateService
  ) {}

  ngOnInit() {
    this.StateService.ready$.subscribe(ready => {
      this.ready = ready;
    });
    this.StateService.choose$.subscribe(choose => {
      this.choose = choose;
    });
    this.StateService.showSecF$.subscribe(showSecF => {
      this.showSecF = showSecF;
    });
    this.Subscription = this.AuthService.authorized$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.back();
      }
    });
  }

  ngOnDestroy() {
    if (this.Subscription) {
      this.Subscription.unsubscribe();
    }
  }

  back() {
    this.StateService.setReady(false);
    this.StateService.setChoose(null);
    this.StateService.setShowSecF(true);
  }
}
