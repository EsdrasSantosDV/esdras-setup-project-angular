import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/*
  Explicação:
  - O valor do contador é armazenado em um BehaviorSubject.
  - O valor do contador é exibido no template com pipe async.
  - O valor do contador é incrementado a cada vez que o botão é clicado.
*/
export class ExerciseThirteenComponent {
  count$ = new BehaviorSubject<number>(0);

  increment() {
    this.count$.next(this.count$.value + 1);
  }
}
