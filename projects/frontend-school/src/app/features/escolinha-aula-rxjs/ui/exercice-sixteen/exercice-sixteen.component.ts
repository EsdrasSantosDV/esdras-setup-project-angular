import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, mergeMap, of, Subject, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-sixteen',
  standalone: true,
  imports: [],
  templateUrl: './exercice-sixteen.component.html',
  styleUrl: './exercice-sixteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciceSixteenComponent {
  private requisicao$ = new Subject<void>();

  constructor() {
    this.requisicao$.pipe(mergeMap(() => this.simularRequisicao().pipe(tap((res) => console.log(res))))).subscribe();
  }

  dispararRequisicao() {
    this.requisicao$.next();
  }

  simularRequisicao() {
    const tempo = Math.floor(Math.random() * 3000) + 1000; // 1-4s
    return of(`✅ Requisição finalizada em ${tempo}ms`).pipe(delay(tempo));
  }
}

/*
 Excelente!
*/
