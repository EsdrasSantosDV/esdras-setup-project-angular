import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent {
  fonte1$ = interval(1000).pipe(take(11));

  fonte2$ = this.fonte1$.pipe(map((x) => x * x));
}
