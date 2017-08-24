import { Component } from '@angular/core';
import { Route, Router} from '@angular/router';
import { HallService } from './core/services/hall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  constructor(){
  }
  title = 'app';
}
