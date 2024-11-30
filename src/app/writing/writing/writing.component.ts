import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.css'
})
export class WritingComponent {
  @Input() isAuthorized: boolean = false;
  @Input() showWriting: boolean = false;

  closeNote() {
    this.showWriting = false;
  }
}
