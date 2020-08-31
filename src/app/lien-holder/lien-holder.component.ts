import { Component, OnInit } from '@angular/core';
import { LienHolder } from '../Lien-Holder';
import { LiendataService } from '../liendata.service';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { BANKS } from '../mock-lien-holders';

@Component({
  selector: 'app-lien-holder',
  templateUrl: './lien-holder.component.html',
  styleUrls: ['./lien-holder.component.css']
})

export class LienHolderComponent implements OnInit {

  lienholders: LienHolder[];

  constructor(private liendataService: LiendataService) { }

  ngOnInit(): void {
    this.getLienHolders();
  }

  getLienHolders(): void {
    this.liendataService.getLienHolders().subscribe(lienholders => this.lienholders = lienholders);
  }
  getLienHolder(id: number): Observable<lienholder> {
    this.messageService.add(`LiendataService: fetched lienholder id=${id}`);
    return of(BANKS.find(lienholder => lienholder.id === id));
  }

}
