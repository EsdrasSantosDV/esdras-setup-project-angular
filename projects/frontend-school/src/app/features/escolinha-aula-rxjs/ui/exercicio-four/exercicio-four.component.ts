import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, interval, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-four.component.html',
  styleUrl: './exercicio-four.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFourComponent {
  /* fonte$ = interval(1000).pipe(
    filter((value) => value === 35),
    tap(() => console.log('Valor 35 encontrado!')),
  ); */

  fonte$ = interval(1000).pipe(
    tap((value) => {
      if (value === 35) {
        console.log('Valor 35 encontrado!');
      }
    }),
  );
}
