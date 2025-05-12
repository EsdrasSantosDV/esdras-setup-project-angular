import { ChangeDetectionStrategy, Component } from '@angular/core';
import { concatMap, delay, of, Subject, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-seventeen',
  standalone: true,
  imports: [],
  templateUrl: './exercice-seventeen.component.html',
  styleUrl: './exercice-seventeen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciceSeventeenComponent {
  private requisicao$ = new Subject<void>();

  constructor() {
    this.requisicao$.pipe(concatMap(() => this.simularRequisicao().pipe(tap((res) => console.log(res))))).subscribe();
  }

  dispararRequisicao() {
    this.requisicao$.next();
  }

  simularRequisicao() {
    const tempo = Math.floor(Math.random() * 3000) + 1000;
    return of(`✅ Requisição finalizada em ${tempo}ms`).pipe(delay(tempo));
  }
}


/*
 Excelente! ENTENDEU O PROPOSITO
*/
