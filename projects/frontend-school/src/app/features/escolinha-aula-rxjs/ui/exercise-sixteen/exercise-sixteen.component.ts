import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-sixteen',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercise-sixteen.component.html',
  styleUrl: './exercise-sixteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação:
  - O componente usa o BehaviorSubject para armazenar as respostas.
  - Usei um array para tratar como se fossem uma fila de requisições.
  - Responses é apenas para mostrar as respostas no template.
  - Precisei do subscribe aqui para que o BehaviorSubject emitisse os valores, nesse caso o pipe async
  não faz sentido.
  - Como usei um subscribe, fiz o unsubiscribe no ngOnDestroy.
  - Completei o subject também no ngOnDestroy para evitar vazamento de memória.
*/
export class ExerciseSixteenComponent implements OnInit, OnDestroy {
  private responsesSubject = new BehaviorSubject<string[]>([]);
  responses$!: Observable<string[]>;
  subscription!: Subscription;

  ngOnInit() {
    this.responses$ = this.responsesSubject.asObservable();
  }

  simulateRequest(clickNumber: number) {
    this.subscription = of(`Resposta da requisição ${clickNumber}`)
      .pipe(
        delay(1000),
        tap((response) => {
          console.log(`Ex16: ${response}`);
          this.responsesSubject.next([...this.responsesSubject.value, response]);
        }),
      )
      .subscribe();
  }

  onClick() {
    const clickNumber = Math.floor(Math.random() * 1000);
    this.simulateRequest(clickNumber);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.responsesSubject.complete();
  }
}
