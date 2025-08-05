/**
 * TextFieldComponent
 * -------------------
 * A reusable standalone input component with optional icon, error state, and disabled state.
 *
 * ✅ Inputs:
 * - icon: string            → Path to icon (e.g., 'assets/images/search.svg')
 * - placeholder: string     → Placeholder text inside the input
 * - initialValue: string    → Pre-filled value for the input field
 * - type: string            → Input type (e.g., 'text', 'password'); default is 'text'
 * - disabled: boolean       → Disables the input if true
 * - error: string | null    → Displays an error message below the input
 *
 * 📤 Outputs:
 * - valueChange: string     → Emits current value when the input changes
 * - focus: void        → Emits when input gets focus
 * - blur: void         → Emits when input loses focus
 *
 * 🧪 Example Usage:
 * <app-text-field
 *   icon="assets/images/search.svg"
 *   placeholder="Search..."
 *   type="text"
 *   [initialValue]="'Park'"
 *   [disabled]="false"
 *   [error]="'This field is required'"
 *   (valueChange)="onValueChange($event)"
 * ></app-text-field>
 */

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent implements OnInit {
  @Input() icon = '';
  @Input() placeholder = 'Enter text';
  @Input() initialValue = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() disabled = false;
  @Input() error: string | null = null;

  @Output() valueChange = new EventEmitter<string>();
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();

  value = '';
  isFocused = false;

  ngOnInit(): void {
    this.value = this.initialValue || '';
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }

  handleFocus(): void {
    this.isFocused = true;
    this.focus.emit();
  }

  handleBlur(): void {
    this.isFocused = false;
    this.blur.emit();
  }
}
