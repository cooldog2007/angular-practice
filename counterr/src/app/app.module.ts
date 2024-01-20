import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './components/control/control.component';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';
import { NumberComponent } from './components/number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    OddComponent,
    EvenComponent,
    NumberComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
