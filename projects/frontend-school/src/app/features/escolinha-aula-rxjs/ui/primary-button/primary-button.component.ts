import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'esdras-khan-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryButtonComponent {
  @Input() label = '';
  @Input() className = '';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
