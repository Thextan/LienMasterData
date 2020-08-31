import { Component, OnInit, Input } from '@angular/core';
import { Producer } from '../Producer';

@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['./producer-detail.component.css']
})
export class ProducerDetailComponent implements OnInit {

  @Input() producer: Producer;

  constructor() { }

  ngOnInit(): void { }
}
