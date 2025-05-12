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
}

/*
 abordagem interessante
 mas voce poderia ter feito o subscribe no template, e nao no ts.
  numbers$ = range(1, 10).pipe(
    skip(3),
    tap((valor) => {
      this.numbers.push(valor);
    }),
  );

  sempre busque ser o mais declarativo possivel, e nao ficar fazendo subscribe em todos os lugares.


 numbers$ = range(1, 10).pipe(skip(3), toArray());
 //OLHA ESSA ABORDAGEM, QUE É MUITO INTERESSANTE, E MUITO MAIS CLARO E REATIVO
 NA DECLARACÃO DO OBSERVABLE, VOCE JA ESTA FAZENDO O QUE VOCE QUER, E NAO PRECISA DO SUBSCRIBE
*/
