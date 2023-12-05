import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent {

  ngOnInit() {
    // Logic for handling the visibility of the Return Date input
    const typeFlightDropdown = document.getElementById('TypeFlight') as HTMLSelectElement;
    const returnDateContainer = document.getElementById('returnDateContainer');

    if (typeFlightDropdown && returnDateContainer) {
      typeFlightDropdown.addEventListener('change', () => {
        if (typeFlightDropdown.value === 'Round-Trip') {
          returnDateContainer.style.display = 'block';
        } else {
          returnDateContainer.style.display = 'none';
        }
      });
    }
    
  }
}
