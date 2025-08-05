import { Component } from '@angular/core';
import { TextFieldComponent } from './components/shared/text-field/text-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-input-element';
}
