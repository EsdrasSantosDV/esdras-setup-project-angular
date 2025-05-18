import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, exhaustMap, map, of, startWith, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

type LoginStatus = 'idle' | 'loading' | 'success';

@Component({
  selector: 'esdras-khan-exercise-nineteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-nineteen.component.html',
  styleUrl: './exercise-nineteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseNineteenComponent {
  private loginClick$ = new Subject<void>();

  loginStatus$ = this.loginClick$.pipe(
    exhaustMap(() =>
      this.fakeLoginRequest().pipe(
        map(() => 'success' as LoginStatus),
        startWith('loading' as LoginStatus),
      ),
    ),
    startWith('idle' as LoginStatus),
  );

  onLoginClick() {
    this.loginClick$.next();
  }

  fakeLoginRequest() {
    return of(null).pipe(delay(2000));
  }
}
