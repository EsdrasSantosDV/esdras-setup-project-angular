import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, map, of, toArray } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercise-twenty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-twenty.component.html',
  styleUrl: './exercise-twenty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTwentyComponent {
  values$ = of(1, 2, 3, 4, 5).pipe(
    map((value) => value * 10),
    filter((value) => value > 20),
    toArray(),
  );
}
