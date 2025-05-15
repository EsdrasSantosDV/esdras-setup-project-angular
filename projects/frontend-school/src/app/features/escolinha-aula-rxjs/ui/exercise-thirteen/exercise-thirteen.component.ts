import { ChangeDetectionStrategy, Component } from '@angular/core';
import { scan, startWith, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseThirteenComponent {
  private click$ = new Subject<void>();

  count$ = this.click$.pipe(
    scan((count) => count + 1, 0),
    startWith(0),
  );

  increment() {
    this.click$.next();
  }
}
