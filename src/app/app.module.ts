import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import 'hammerjs';
import { environment } from '../environments/environment';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { HallService } from './core/services/hall.service';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { NewHallComponent } from './new-hall/new-hall.component';
import { SearchHallComponent } from './search-hall/search-hall.component';
import { HallListComponent } from './hall-list/hall-list.component';
import { HallDetailsComponent } from './hall-details/hall-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HallComponent,
    NewHallComponent,
    SearchHallComponent,
    HallListComponent,
    HallDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,  
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
