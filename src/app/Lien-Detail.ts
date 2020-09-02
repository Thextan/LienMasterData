export interface LienDetail {
	producerid: number;
	lienholderid: number;
	commoditylist: string;
	quantity: number;
	amount: number;
	cropyear: string;
	state: string;
	county: string;
	jointpayableline: string;
	otherobligation: string;
	dateplaced: Date;
	datereleased: Date;
	dateexpired: Date;
	government: string;
	warning: string;
}