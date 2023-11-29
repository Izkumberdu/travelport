import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { HomepageComponent } from './homepage/homepage.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: '', component: HomepageComponent},
{path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule

    
  ],
  exports:[
    [RouterModule],
  ]
})
export class AppRoutingModule { }
