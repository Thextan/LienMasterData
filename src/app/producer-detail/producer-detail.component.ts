import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Producer } from '../Producer';
import { LiendataService } from '../liendata.service';

@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['./producer-detail.component.css']
})

export class ProducerDetailComponent implements OnInit {

  producer: Producer;

  constructor(
    private route: ActivatedRoute,
    private liendataService: LiendataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProducer();
  }

  getProducer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.liendataService.getProducer(id).subscribe(producer => this.producer = producer)
  }
  goBack(): void {
    this.location.back();
  }

}
