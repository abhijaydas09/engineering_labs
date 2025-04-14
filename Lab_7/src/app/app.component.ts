//no Use of this folder .

// app.component.ts
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ItemsComponent } from '/Users/abhijaydas/Downloads/webdev_labs/angular-api-demo/src/app/items/items.component';
import { ItemFormComponent } from './item-form/item-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ItemFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-api-demo';
}
