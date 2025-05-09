import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent {
  numeros$: Observable<number[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  quadrados$ = this.numeros$.pipe(map((numeros) => numeros.map((numero) => numero * numero)));
}
