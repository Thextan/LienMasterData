import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LienHolder } from '../lien-holder';
import { LiendataService } from '../liendata.service';

@Component({
  selector: 'app-lien-holder-detail',
  templateUrl: './lien-holder-detail.component.html',
  styleUrls: ['./lien-holder-detail.component.css']
})

export class LienHolderDetailComponent implements OnInit {

  lienholder: LienHolder;

  constructor(
    private route: ActivatedRoute,
    private liendataService: LiendataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLienHolder();
  }
  getLienHolder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.liendataService.getLienHolder(id).subscribe(lienholder => this.lienholder = lienholder)
  }
  goBack(): void {
    this.location.back();
  }
}
