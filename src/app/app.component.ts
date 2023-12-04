import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchFlightsComponent } from "./search-flights/search-flights.component";
import {faGlobe} from "@fortawesome/free-solid-svg-icons"
import { CardsComponent } from "./cards/cards.component";
import { MapComponent } from "./map/map.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { FooterComponent } from "./footer/footer.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, SearchFlightsComponent, CardsComponent, MapComponent, CarouselComponent, FooterComponent, HomepageComponent, LoginComponent]
})
export class AppComponent {
  title = 'Travelport';
  faGlobe = faGlobe;

    customOptions: any = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
