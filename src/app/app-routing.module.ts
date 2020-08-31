import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LienHolderComponent } from './lien-holder/lien-holder.component';
import { LienHolderDetailComponent } from './lien-holder-detail/lien-holder-detail.component';
import { ProducerComponent } from './producer/producer.component';
import { ProducerDetailComponent } from './producer-detail/producer-detail.component';
import { LienDetailComponent } from './lien-detail/lien-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/producers', pathMatch: 'full' },
  { path: 'lienholders', component: LienHolderComponent },
  { path: 'lhdetail/:id', component: LienHolderDetailComponent },
  { path: 'producers', component: ProducerComponent },
  { path: 'pdetail/:id', component: ProducerDetailComponent },
  { path: 'liendetail', component: LienDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
