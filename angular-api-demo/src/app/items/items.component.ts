// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-items',
//   imports: [],
//   templateUrl: './items.component.html',
//   styleUrl: './items.component.css'
// })
// export class ItemsComponent {
//
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    try {
      // Fetch data from API
      const data = await this.apiService.getItems();
      this.items = data.slice(0, 10); // Limit to first 10 items
      this.loading = false;
    } catch (err) {
      this.error = 'Failed to load data';
      this.loading = false;
      console.error('Error fetching data:', err);
    }
  }
}
