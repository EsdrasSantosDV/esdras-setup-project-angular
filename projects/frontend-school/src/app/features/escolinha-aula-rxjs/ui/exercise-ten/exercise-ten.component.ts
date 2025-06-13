import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-ten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-ten.component.html',
  styleUrl: './exercise-ten.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTenComponent {
  values$: Observable<number> = interval(1000).pipe(
    take(40),
    tap((value) => {
      if (value === 35) {
        console.log('Value 35 reached!');
      }
    }),
  );
}
