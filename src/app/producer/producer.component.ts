import { Component, OnInit } from '@angular/core';
import { Producer } from '../Producer';
import { LiendataService } from '../liendata.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-producer',
    templateUrl: './producer.component.html',
    styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

    producers: Producer = {
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

    constructor(private liendataService: LiendataService) { }

    ngOnInit(): void {
        this.getProducers();
    }

    getProducers(): void {
        this.liendataService.getProducers().subscribe(producers => this.producers = producers);
    }
}
