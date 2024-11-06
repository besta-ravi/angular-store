import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterViewComponent } from './counter-view/counter-view.component';
import { CustomBgcolorDirective } from './custom-bgcolor.directive';
import { CustomInputCounterComponent } from './custom-input-counter/custom-input-counter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,StoreModule.forRoot({counter:counterReducer}) ],
  declarations: [ AppComponent, HelloComponent,CounterComponent,CounterButtonComponent,CounterViewComponent,CustomBgcolorDirective,CustomInputCounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
