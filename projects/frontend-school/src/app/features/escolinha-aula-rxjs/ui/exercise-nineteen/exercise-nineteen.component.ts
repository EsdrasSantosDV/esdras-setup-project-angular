import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, exhaustMap, Observable, of, Subject, tap } from 'rxjs';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'esdras-khan-exercise-nineteen',
  standalone: true,
  imports: [AsyncPipe, PrimaryButtonComponent],
  templateUrl: './exercise-nineteen.component.html',
  styleUrl: './exercise-nineteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação:
  - O operador `exhaustMap` é usado para ignorar novas emissões enquanto uma emissão anterior ainda está em andamento.
  Isso é útil em cenários onde você não quer que múltiplos cliques ou eventos acionem múltiplas requisições simultâneas.
*/
export class ExerciseNineteenComponent {
  private loginClick$ = new Subject<void>();
  loginResult$: Observable<string>;

  constructor() {
    this.loginResult$ = this.loginClick$.pipe(
      exhaustMap(() =>
        this.simulateLogin().pipe(tap((response) => console.log(response))),
      ),
    );
  }

  onClick() {
    this.loginClick$.next();
  }

  simulateLogin() {
    return of('Login bem-sucedido!').pipe(delay(1000));
  }
}
