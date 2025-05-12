import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, take, tap, toArray } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-eight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-eight.component.html',
  styleUrl: './exercicio-eight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioEightComponent {
  numbers$ = interval(1000).pipe(
    take(5),
    toArray(),
    tap((values) => console.log('Exercise 8:', values)),
  );
}

/*
 Excelente!
 GOSTEI DESSE TO ARRAY, ELE É MUITO INTERESSANTE, E MUITO MAIS CLARO E REATIVO
*/
