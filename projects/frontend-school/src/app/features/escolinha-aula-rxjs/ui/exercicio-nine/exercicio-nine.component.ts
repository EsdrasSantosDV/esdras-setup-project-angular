import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, range, take } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-nine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-nine.component.html',
  styleUrl: './exercicio-nine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Crie uma fonte de números de 1 a 10 e capture apenas o primeiro número que seja maior que 5.
export class ExercicioNineComponent {
  fonte$ = range(1, 10).pipe(
    filter((valor) => valor > 5),
    take(1),
  );
}
