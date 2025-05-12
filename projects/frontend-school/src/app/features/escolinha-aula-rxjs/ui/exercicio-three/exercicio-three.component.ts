import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent {
  numbers$ = interval(1000).pipe(
    take(10),
    map((n) => (n + 1) * 2),
  );
}

/*
 aqui seria na vdd o quadrado de cada numero, seria n*n
 mas excelente, segue uma abordagem declarativa, onde se declara o que vai ser feito com o valor emitido pelo observable
*/
