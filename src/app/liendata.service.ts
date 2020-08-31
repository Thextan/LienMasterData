import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  getProducers(): Observable<Producer> {
    this.messageService.add('ProducerService: fetched producer');
    return of();
  }
}
