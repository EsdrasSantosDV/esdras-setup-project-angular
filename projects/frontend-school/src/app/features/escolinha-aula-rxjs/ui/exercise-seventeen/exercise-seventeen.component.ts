import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, concatMap, delay, Observable, of, tap } from 'rxjs';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'esdras-khan-exercise-seventeen',
  standalone: true,
  imports: [AsyncPipe, PrimaryButtonComponent],
  templateUrl: './exercise-seventeen.component.html',
  styleUrl: './exercise-seventeen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação:
  - O componente usa o BehaviorSubject para armazenar os cliques.
  - O clickSubject é um BehaviorSubject que armazena o número de cliques.
  - O concatMap é usado para encadear as requisições, fazendo com que
  uma nova requisição só começo depois da anterior acabar.
  - O método onClick() incrementa o número de cliques e aciona a requisição.
*/
export class ExerciseSeventeenComponent implements OnInit {
  private clickSubject = new BehaviorSubject<number>(0);
  clickResult$!: Observable<string>;

  ngOnInit() {
    this.clickResult$ = this.clickSubject.pipe(
      concatMap((clickNumber) =>
        of(`Requisição ${clickNumber} concluída`).pipe(
          delay(1000),
          tap((response) => console.log(response)),
        ),
      ),
    );
  }

  onClick() {
    this.clickSubject.next(this.clickSubject.value + 1);
  }
}
