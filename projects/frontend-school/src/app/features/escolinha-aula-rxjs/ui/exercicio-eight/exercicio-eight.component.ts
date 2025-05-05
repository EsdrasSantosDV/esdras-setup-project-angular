import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, Observable, Subject, switchMap, take } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-eight',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercicio-eight.component.html',
  styleUrl: './exercicio-eight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação: 
  - Criei um observable chamado secondCounter e um subject chamado reset
  
  - Na Inicialização do componente, o secondCounter recebe um observable que vem do reset com um swtichMap
  que tem um interval dentro dele, isso significa que quando o reset emitir um valor, o switchMap vai sobrepor
  o interval por um novo, fazendo com que secondCounter seja sobreposto com um novo observable.

  - O interval vai emitir valores de 0 a 4, e o take(5) vai limitar a 5 emissões.

  - O metodo reset emite um valor para reset, ativando o switchMap
*/
export class ExercicioEightComponent implements OnInit {
  secondCounter$!: Observable<number>;
  reset$ = new Subject<void>();

  ngOnInit(): void {
    this.secondCounter$ = this.reset$.pipe(switchMap(() => interval(1000).pipe(take(5))));
    setTimeout(() => {
      this.reset$.next();
    });
  }

  reset(): void {
    this.reset$.next();
  }
}
