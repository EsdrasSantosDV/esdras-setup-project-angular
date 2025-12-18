import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {}

