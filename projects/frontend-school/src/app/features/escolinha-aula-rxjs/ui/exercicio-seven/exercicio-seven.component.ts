import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of, range, scan, skip } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-seven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-seven.component.html',
  styleUrl: './exercicio-seven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//Crie uma fonte de números de 1 a 10 e ignore os 3 primeiros valores.
export class ExercicioSevenComponent {
  fonte$ = range(1, 10).pipe(
    skip(3),
    scan((acc, val) => [...acc, val], [] as number[]),
  );
}
