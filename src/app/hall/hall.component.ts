import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HallService } from '../core/services/hall.service';
import { Hall } from '../shared';
@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  hall: Hall = new Hall();
  constructor( private router: Router ) { }

  ngOnInit() {
  
  }

  addHall(){
    this.router.navigate(['/hall/new']);
  }

}
