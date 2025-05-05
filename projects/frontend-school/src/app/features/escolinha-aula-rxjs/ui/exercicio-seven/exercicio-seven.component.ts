import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { range, skip, toArray } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-seven',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './exercicio-seven.component.html',
  styleUrl: './exercicio-seven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação:
  - O operador `skip` ignora os primeiros 3 valores emitidos pelo observable.
  - O operador `toArray` coleta todos os valores restantes e os emite como um único array para que
  eu mostre no template que os 3 primeiros foram pulados.
*/
export class ExercicioSevenComponent {
  numbers$ = range(1, 10).pipe(skip(3), toArray());
}
