import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LienHolderComponent } from './lien-holder/lien-holder.component';
import { ProducerComponent } from './producer/producer.component';
import { LienDetailComponent } from './lien-detail/lien-detail.component';
import { LienHolderDetailComponent } from './lien-holder-detail/lien-holder-detail.component';
import { ProducerDetailComponent } from './producer-detail/producer-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LienHolderComponent,
    ProducerComponent,
    LienDetailComponent,
    LienHolderDetailComponent,
    ProducerDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
