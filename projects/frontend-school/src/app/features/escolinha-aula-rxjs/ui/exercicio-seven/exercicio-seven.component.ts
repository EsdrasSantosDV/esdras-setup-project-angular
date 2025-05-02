import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-seven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-seven.component.html',
  styleUrl: './exercicio-seven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSevenComponent {
  valor$ = interval(1000).pipe(
    takeWhile((x) => x <= 10),
    filter((x) => x > 3),
  );
}
