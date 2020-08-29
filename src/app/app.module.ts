import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LienHolderComponent } from './lien-holder/lien-holder.component';
import { ProducerComponent } from './producer/producer.component';
import { LienDetailComponent } from './lien-detail/lien-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LienHolderComponent,
    ProducerComponent,
    LienDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
