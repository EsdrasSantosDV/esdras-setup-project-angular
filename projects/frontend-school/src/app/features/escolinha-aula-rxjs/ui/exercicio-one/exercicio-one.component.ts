import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-one.component.html',
  styleUrl: './exercicio-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioOneComponent {
  numbers$ = interval(1000);
}
