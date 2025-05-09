import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, finalize, first, from, map, range, take, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-nine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-nine.component.html',
  styleUrl: './exercicio-nine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioNineComponent {
  fonte$ = range(1, 10).pipe(
    filter((value) => value > 5),
    first(),
  );
}
