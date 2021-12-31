import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';
import { NavComponent } from './components/nav/nav.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { InvoiceTileComponent } from './components/invoice-tile/invoice-tile.component';
import { StateService } from './services/state.service';
import { InvoiceService } from './services/invoice.service';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    KitchenSinkComponent,
    NavComponent,
    EditDialogComponent,
    InvoiceListComponent,
    InvoiceTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [StateService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
