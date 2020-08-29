import { Component, OnInit } from '@angular/core';
import { LienHolder } from '../Lien-Holder';
import { BANKS } from '../mock-lien-holders';

@Component({
  selector: 'app-lien-holder',
  templateUrl: './lien-holder.component.html',
  styleUrls: ['../app.component.css']
})
export class LienHolderComponent implements OnInit {
		LienHolder = {
			name: '',
			city: '',
			payableline: ''
		}
		selectedLienHolder: LienHolder;
		onSelect(lienholder: LienHolder): void {
			this.selectedLienHolder = lienholder;
		}
		lienholders = BANKS;

  constructor() { }

  ngOnInit(): void {
  }

}
