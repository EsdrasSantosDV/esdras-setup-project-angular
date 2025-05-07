import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, range, toArray } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent {
  originalValues$: Observable<number[]> = range(1, 10).pipe(toArray());

  squaredValues$: Observable<number[]> = range(1, 10).pipe(
    map((val) => val * val),
    toArray(),
  );
}
