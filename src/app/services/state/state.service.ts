import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private sourceReady = new BehaviorSubject<boolean>(false);
  private sourceChoose = new BehaviorSubject<any>(null);
  private sourceSecF = new BehaviorSubject<boolean>(true);

  ready$ = this.sourceReady.asObservable();
  choose$ = this.sourceChoose.asObservable();
  showSecF$ = this.sourceSecF.asObservable();

  constructor() {}

  setReady(ready: boolean) {
    this.sourceReady.next(ready);
  }

  setChoose(cat: any) {
    this.sourceChoose.next(cat);
  }

  setShowSecF(show: boolean) {
    this.sourceSecF.next(show);
  }
}
