import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription, switchMap, take } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-one',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercicio-one.component.html',
  styleUrl: './exercicio-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação: Criei um observable chamado secondCounter e um subject chamado reset
  
  Na Inicialização do componente, o secondCounter recebe um observable que vem do reset com um swtichMap
  que tem um interval dentro dele, isso significa que quando o reset emitir um valor, o switchMap vai sobrepor
  o interval por um novo, fazendo com que secondCounter seja sobreposto com um novo observable.

  O metodo reset emite um valor para reset, ativando o switchMap

  O ngOnDestroy é utilizado para cancelar a subscrição no secondCounter, evitando vazamentos de memória.
*/
export class ExercicioOneComponent implements OnInit, OnDestroy {
  secondCounter$!: Observable<number>;
  reset$ = new Subject<void>();
  private subscription!: Subscription;

  ngOnInit(): void {
    this.secondCounter$ = this.reset$.pipe(switchMap(() => interval(1000).pipe(take(11))));
    this.subscription = this.secondCounter$.subscribe();
    setTimeout(() => {
      this.reset$.next();
    });
  }

  reset(): void {
    this.reset$.next();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
