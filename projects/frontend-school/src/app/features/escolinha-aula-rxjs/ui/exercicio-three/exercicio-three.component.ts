import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent {
  numbers$ = interval(1000).pipe(
    take(10),
    map((n) => (n + 1) * 2),
  );
}
