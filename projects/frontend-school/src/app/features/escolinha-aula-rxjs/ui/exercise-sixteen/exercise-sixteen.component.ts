import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, of } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-sixteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-sixteen.component.html',
  styleUrl: './exercise-sixteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseSixteenComponent {
  private buttonClick$ = new Subject<void>();

  loginStatus$: Observable<string> = this.buttonClick$.pipe(
    exhaustMap(() => {
      return of('Login successful').pipe(tap(() => console.log('Login completed')));
    }),
  );

  onButtonClick(): void {
    this.buttonClick$.next();
  }
}
