import { ChangeDetectionStrategy, Component } from '@angular/core';
import { find, interval, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-nine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-nine.component.html',
  styleUrl: './exercicio-nine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioNineComponent {
  numbers$ = interval(1000).pipe(
    find((value) => value > 5),
    tap((value) => console.log('Exercise 9:', value)),
  );
}
