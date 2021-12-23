import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    KitchenSinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
