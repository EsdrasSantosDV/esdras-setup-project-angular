import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, first, range } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-nine',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercicio-nine.component.html',
  styleUrl: './exercicio-nine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/* 
  Explicação: 
  - Usei um range de 1 a 10
  - Usei o operador filter para filtrar os valores maiores que 5
  - Usei o operador first para pegar o primeiro valor que passar pelo filtro
*/
export class ExercicioNineComponent {
  fisrtNumber$ = range(1, 10).pipe(
    filter((value) => value > 5),
    first(),
  );
}
