import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchFlightsComponent } from "./search-flights/search-flights.component";
import {faGlobe} from "@fortawesome/free-solid-svg-icons"
import { CardsComponent } from "./cards/cards.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, SearchFlightsComponent, CardsComponent]
})
export class AppComponent {
  title = 'Travelport';
  faGlobe = faGlobe;

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
