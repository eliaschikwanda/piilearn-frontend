import {Component, Input} from '@angular/core';
import {SlicePipe} from "@angular/common";

@Component({
  selector: 'app-truncate-text',
  standalone: true,
  imports: [
    SlicePipe
  ],
  templateUrl: './truncate-text.component.html',
  styleUrl: './truncate-text.component.scss'
})
export class TruncateTextComponent {
  @Input() text: string = '';
  @Input() maxLength: number = 50;
}
