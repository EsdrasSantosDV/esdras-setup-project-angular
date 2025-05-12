import { ChangeDetectionStrategy, Component } from '@angular/core';
import { range, skip, tap, toArray } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-seven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-seven.component.html',
  styleUrl: './exercicio-seven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSevenComponent {
  numbers: number[] = [];

  constructor() {
    range(1, 10)
      .pipe(
        skip(3),
        tap((valor) => {
          this.numbers.push(valor);
        }),
      )
      .subscribe();
    console.log('Exercicio 7:', this.numbers);
  }

  numbers$ = range(1, 10).pipe(skip(3), toArray());
  //OLHA ESSA
}

/*
 Excelente!
*/
