import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  interval,
  map,
  Observable,
  Subject,
  Subscription,
  switchMap,
  take,
} from 'rxjs';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    PrimaryButtonComponent,
  ],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação: Criei um observable chamado squareOfNumbers e um subject chamado reset
  
  Na Inicialização do componente, o squareOfNumbers recebe um observable que vem do reset com um swtichMap
  que tem um interval dentro dele, isso significa que quando o reset emitir um valor, o switchMap vai sobrepor
  o interval por um novo, fazendo com que squareOfNumbers seja sobreposto com um novo observable.

  No interval, multiplico o valor por 2 com map e uso o take(10) para limitar a 10 valores.

  O metodo reset emite um valor para reset, ativando o switchMap

  O ngOnDestroy é utilizado para cancelar a subscrição no squareOfNumbers, evitando vazamentos de memória.
*/
export class ExercicioThreeComponent implements OnInit, OnDestroy {
  squareOfNumbers$!: Observable<number>;
  private subscription!: Subscription;
  reset$ = new Subject<void>();

  ngOnInit(): void {
    this.squareOfNumbers$ = this.reset$.pipe(
      switchMap(() =>
        interval(1000).pipe(
          map((value) => value * 2),
          take(10),
        ),
      ),
    );
    this.subscription = this.squareOfNumbers$.subscribe();
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
