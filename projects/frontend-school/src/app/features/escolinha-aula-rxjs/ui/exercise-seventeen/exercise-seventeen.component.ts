import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, of } from 'rxjs';
import { concatMap, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-seventeen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-seventeen.component.html',
  styleUrl: './exercise-seventeen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseSeventeenComponent {
  private buttonClick$ = new Subject<void>();

  requestStatus$: Observable<string> = this.buttonClick$.pipe(
    concatMap(() => {
      return of('Request completed').pipe(
        delay(2000),
        tap(() => console.log('Request completed')),
      );
    }),
  );

  onButtonClick(): void {
    this.buttonClick$.next();
  }
}
