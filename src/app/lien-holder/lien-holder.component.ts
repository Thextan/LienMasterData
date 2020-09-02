import { Component, OnInit } from '@angular/core';
import { LienHolder } from '../Lien-Holder';
import { LiendataService } from '../liendata.service';

@Component({
  selector: 'app-lien-holder',
  templateUrl: './lien-holder.component.html',
  styleUrls: ['./lien-holder.component.css']
})

export class LienHolderComponent implements OnInit {

  lienholders: LienHolder[];

  constructor(private liendataService: LiendataService) { }

  ngOnInit() {
    this.getLienHolders();
  }
  getLienHolders(): void {
    this.liendataService.getLienHolders();
  }

}
