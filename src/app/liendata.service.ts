import { Injectable } from '@angular/core';
import { Observable, of, ObservableInput } from 'rxjs';

import { LienHolder } from './Lien-Holder';
import { Producer } from './Producer';
import { MessageService } from './message.service';
import { BANKS } from './mock-lien-holders';

@Injectable({
  providedIn: 'root'
})
export class LiendataService {

  constructor(private messageService: MessageService) { }

  getLienHolders(): Observable<LienHolder[]> {
    this.messageService.add('LienHolderService: fetched lienholder');
    return of(BANKS);
  }
  getLienHolder(id: number): Observable<LienHolder> {
    this.messageService.add(`LiendataService: fetched lienholder id=${id}`);
    return of(BANKS.find(lienholder => lienholder.id === id));
  }
  getProducers(): Observable<Producer> {
    this.messageService.add('ProducerService: fetched producer');
    return of();
  }
  getProducer(id: number): Observable<Producer> {
    this.messageService.add(`LiendataService: fetched producer id=${id}`);
    return of(BANKS.find(producer => producer.id === id));
  }
}
