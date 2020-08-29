import { Component, OnInit } from '@angular/core';
import { LienDetail } from '../Lien-Detail';

@Component({
  selector: 'app-lien-detail',
  templateUrl: './lien-detail.component.html',
  styleUrls: ['../app.component.css']
})
export class LienDetailComponent implements OnInit {
	liendetail: LienDetail = {
		commoditylist: 'Corn, Soybeans, Wheat',
		quantity: -1,
		amount: -1,
		cropyear: '2020,2021',
		state: 'MO',
		county: 'all counties',
		jointpayableline: 'Dustin N. Keith',
		otherobligation: '',
		dateplaced: new Date('2020-08-29'),
		datereleased: new Date('2099-12-31'),
		dateexpired: new Date('2099-12-31'),
		government: '',
		warning: ''
	};
  constructor() { }

  ngOnInit(): void {
  }

}
