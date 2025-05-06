import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map, skip, take } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Faça uma fonte Observable que emite os números de 1 a 10 e transforme essa fonte, para que exista uma nova
// fonte que emite o quadrado de cada número.
export class ExercicioThreeComponent {
  fonte$ = interval(1000).pipe(skip(1), take(10));
  quadrado$ = this.fonte$.pipe(map((valor) => valor * valor));
}
