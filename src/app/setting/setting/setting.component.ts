import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  @Input() isAuthorized: boolean = false;
  @Input() showSetting: boolean = false;

  closeSetting() {
    this.showSetting = false;
  }
}
