import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-eight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-eight.component.html',
  styleUrl: './exercicio-eight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioEightComponent {
  number$ = interval(1000).pipe(
    take(6),
    tap((value) => console.log('Exercicio 8', value)),
  );
}
