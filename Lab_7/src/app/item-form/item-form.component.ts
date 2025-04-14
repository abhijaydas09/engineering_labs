
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  itemForm: FormGroup;
  items: any[] = []; // Array to store items

  constructor(private fb: FormBuilder) {
// Initialize the form with form controls and validators
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

// Method to add a new item
  addItem() {
    if (this.itemForm.valid) {
      const newItem = {
        ...this.itemForm.value,
        id: this.items.length ? Math.max(...this.items.map(item => item.id)) + 1 : 1
      };
      this.items.push(newItem); // Add the new item to the list
      this.itemForm.reset(); // Reset the form
    }
  }
}
// app.component.ts
