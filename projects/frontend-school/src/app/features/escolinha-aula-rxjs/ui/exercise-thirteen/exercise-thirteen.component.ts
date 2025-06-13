import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseThirteenComponent {
  private buttonClick$ = new Subject<void>();

  clickCount$: Observable<number> = this.buttonClick$.pipe(
    startWith(0),
    scan((count) => count + 1, 0),
  );

  onButtonClick(): void {
    this.buttonClick$.next();
  }
}
