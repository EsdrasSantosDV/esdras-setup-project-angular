import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercise-seventeen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-seventeen.component.html',
  styleUrl: './exercise-seventeen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseSeventeenComponent {
  private click$ = new Subject<void>();

  requests$: Observable<string>;

  private requestCounter = 0;

  constructor() {
    this.requests$ = this.click$.pipe(concatMap(() => this.fakeRequest(++this.requestCounter)));
  }

  onClick() {
    this.click$.next();
  }

  fakeRequest(id: number): Observable<string> {
    console.log(`Iniciando requisição ${id}`);
    return new Observable<string>((subscriber) => {
      setTimeout(() => {
        console.log(`Requisição ${id} concluída`);
        subscriber.next(`Requisição ${id} concluída`);
        subscriber.complete();
      }, 1000);
    });
  }
}
