import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, interval, take } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-nine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-nine.component.html',
  styleUrl: './exercicio-nine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioNineComponent {
  valor$ = interval(1000).pipe(
    filter((x) => x >= 1 && x <= 10),
    filter((x) => x > 5),
    take(1),
  );
}
