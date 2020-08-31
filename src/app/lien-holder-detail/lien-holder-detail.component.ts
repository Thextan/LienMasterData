import { Component, OnInit, Input } from '@angular/core';
import { LienHolder } from '../Lien-Holder';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LiendataService } from '../liendata.service';

@Component({
  selector: 'app-lien-holder-detail',
  templateUrl: './lien-holder-detail.component.html',
  styleUrls: ['./lien-holder-detail.component.css']
})
export class LienHolderDetailComponent implements OnInit {

  @Input() lienholder: LienHolder;

  constructor(
    private route: ActivatedRoute,
    private liendataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLienHolder();
  }
  getLienHolder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.liendataService.getLienHolder(id).subscribe(lienholder => this.lienholder = lienholder)
  }
}
