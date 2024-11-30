import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccCredComponent } from './accs/acc-cred/acc-cred.component';
import { AccDeactComponent } from './accs/acc-deact/acc-deact.component';
import { AuthenLogComponent } from './authen/authen-log/authen-log.component';
import { AuthenRegComponent } from './authen/authen-reg/authen-reg.component';
import { IconAComponent } from './icons/icon-a/icon-a.component';
import { IconBComponent } from './icons/icon-b/icon-b.component';
import { IconCComponent } from './icons/icon-c/icon-c.component';
import { IconDComponent } from './icons/icon-d/icon-d.component';
import { IconEComponent } from './icons/icon-e/icon-e.component';
import { SecAComponent } from './secs/sec-a/sec-a.component';
import { SecBComponent } from './secs/sec-b/sec-b.component';
import { SecCComponent } from './secs/sec-c/sec-c.component';
import { SecDComponent } from './secs/sec-d/sec-d.component';
import { SecEComponent } from './secs/sec-e/sec-e.component';
import { SecFComponent } from './secs/sec-f/sec-f.component';
import { SecGComponent } from './secs/sec-g/sec-g.component';
import { SecHComponent } from './secs/sec-h/sec-h.component';
import { WritingComponent } from './writing/writing/writing.component';
import { SettingComponent } from './setting/setting/setting.component';
@NgModule({
  declarations: [
    AppComponent,
    AccCredComponent,
    AccDeactComponent,
    AuthenLogComponent,
    AuthenRegComponent,
    IconAComponent,
    IconBComponent,
    IconCComponent,
    IconDComponent,
    IconEComponent,
    SecAComponent,
    SecBComponent,
    SecCComponent,
    SecDComponent,
    SecEComponent,
    SecFComponent,
    SecGComponent,
    SecHComponent,
    WritingComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }