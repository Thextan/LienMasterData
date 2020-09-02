import { Component, OnInit } from '@angular/core';
import { Producer } from '../Producer';
import { LiendataService } from '../liendata.service';

@Component({
    selector: 'app-producer',
    templateUrl: './producer.component.html',
    styleUrls: ['./producer.component.css']
})

export class ProducerComponent implements OnInit {

    producers: Producer[];

    constructor(private liendataService: LiendataService) { }

    ngOnInit() {
        this.getProducers();
    }
    getProducers(): void {
        this.liendataService.getProducers().subscribe(producers => this.producers = producers);
    }
}
