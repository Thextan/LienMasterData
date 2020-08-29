import { Component, OnInit } from '@angular/core';
import { Producer } from '../Producer';

@Component({
    selector: 'app-producer',
    templateUrl: './producer.component.html',
    styleUrls: ['../app.component.css']
})
export class ProducerComponent implements OnInit {

    producer: Producer = {
        firstname: 'Dustin',
            middlename: 'Neal',
            lastname: 'Keith',
            suffix: '',
            address1: '201 Ray Young Dr.',
            address2: '',
            city: 'Columbia',
            state: 'MO',
            zip: '65201'
    };

    constructor() {}

    ngOnInit(): void {}

}
