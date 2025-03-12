import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfTabComponent } from './shared/components/if-tab/if-tab.component';
import { SwitchTabComponent } from './shared/components/switch-tab/switch-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    IfTabComponent,
    SwitchTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
