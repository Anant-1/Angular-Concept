import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchComponent } from './switch/switch.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { DynamicStyleBindingComponent } from './dynamic-style-binding/dynamic-style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    IfelseComponent,
    SwitchComponent,
    ForLoopComponent,
    DynamicStyleBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
