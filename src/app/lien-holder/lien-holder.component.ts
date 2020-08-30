import { Component, OnInit } from '@angular/core';
import { LienHolder } from '../Lien-Holder';
import { BANKS } from '../mock-lien-holders';

@Component({
  selector: 'app-lien-holder',
  templateUrl: './lien-holder.component.html',
  styleUrls: ['./lien-holder.component.css']
})

export class LienHolderComponent implements OnInit {

		lienholders = BANKS;
		selectedLienHolder: LienHolder;
				
   constructor() { }

   ngOnInit(): void { }

	onSelect(lienholder: LienHolder): void {
		this.selectedLienHolder = lienholder;
	}
		
}
