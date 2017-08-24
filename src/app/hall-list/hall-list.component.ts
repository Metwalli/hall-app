import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HallService } from '../core/services/hall.service';

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})
export class HallListComponent implements OnInit {

  constructor( 
    private _hallService: HallService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  gotoDetails(key: string){
    this.router.navigate(['/hall', key]);
  }
}
