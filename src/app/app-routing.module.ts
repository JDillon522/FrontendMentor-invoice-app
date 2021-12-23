import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';

const routes: Routes = [
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
