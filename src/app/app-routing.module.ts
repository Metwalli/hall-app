import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { NewHallComponent } from './new-hall/new-hall.component';
import { HallDetailsComponent } from './hall-details/hall-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/hall', pathMatch: 'full' },
  { 
    path: 'hall',
    children:[
      { path: '', component: HallComponent},
      { path:'new', component: NewHallComponent},
      { path:':id', component: HallDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
