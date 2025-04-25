import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { count, interval, take, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-eight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-eight.component.html',
  styleUrl: './exercicio-eight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioEightComponent {
  font$ = interval(1000).pipe(take(5));
}
