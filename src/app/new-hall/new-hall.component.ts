import { Component, OnInit } from '@angular/core';

import { Hall } from '../shared';

@Component({
  selector: 'app-new-hall',
  templateUrl: './new-hall.component.html',
  styleUrls: ['./new-hall.component.css']
})
export class NewHallComponent implements OnInit {
  hall: Hall = new Hall();
  constructor() { }

  ngOnInit() {
  }

}
