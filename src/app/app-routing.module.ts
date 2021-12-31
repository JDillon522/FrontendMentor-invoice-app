import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceListComponent
  },
  {
    path: 'kitchen-sink',
    component: KitchenSinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
