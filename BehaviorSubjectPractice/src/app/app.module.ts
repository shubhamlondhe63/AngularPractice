import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { GreetingMessageComponent } from './greeting-message/greeting-message.component';
import { NameStateService } from './name-state.service';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    GreetingMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
