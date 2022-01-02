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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './components/select/select.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { DropdownDirective } from './directives/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    KitchenSinkComponent,
    NavComponent,
    EditDialogComponent,
    InvoiceListComponent,
    InvoiceTileComponent,
    SelectComponent,
    DropdownDirective,
    MenuComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StateService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
