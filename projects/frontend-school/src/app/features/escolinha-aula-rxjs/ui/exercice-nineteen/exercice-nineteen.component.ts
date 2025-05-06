import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, exhaustMap, of, Subject } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-nineteen',
  standalone: true,
  imports: [],
  templateUrl: './exercice-nineteen.component.html',
  styleUrl: './exercice-nineteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciceNineteenComponent {
  private loginClick$ = new Subject<void>();

  mensagem = '';

  constructor() {
    this.loginClick$.pipe(exhaustMap(() => this.simularLogin())).subscribe({
      next: (res) => {
        this.mensagem = res;
        console.log(res);
      },
      error: (err) => {
        this.mensagem = 'Erro ao fazer login.';
        console.error(err);
      },
    });
  }

  simularLogin() {
    const tempo = Math.floor(Math.random() * 3000) + 2000;
    return of(`Login realizado com sucesso! Tempo: ${tempo}ms`).pipe(delay(tempo));
  }

  clicarLogin() {
    console.log('Tentando fazer login...');
    this.loginClick$.next();
  }
}
