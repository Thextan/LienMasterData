import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producer } from '../Producer';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-producer',
    templateUrl: './producer.component.html',
    styleUrls: ['./producer.component.css']
})

export class ProducerComponent implements OnInit {

    producers: Producer[];
    private producersUrl = 'api/producers';

    constructor(private messageService: MessageService, private http: HttpClient) { }

    ngOnInit() {
        this.getProducers();
    }
    getProducers(): Observable<Producer[]> {
        return this.http.get<Producer[]>(this.producersUrl);
    }
    private log(message: string) {
        this.messageService.add(`Liendata.Service: ${message}`);
    }
}
