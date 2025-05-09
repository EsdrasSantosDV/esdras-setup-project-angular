import { ChangeDetectionStrategy, Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-nine',
  standalone: true,
  imports: [],
  templateUrl: './exercicio-nine.component.html',
  styleUrl: './exercicio-nine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioNineComponent {
  fonte$ = generate(
    0,
    (x) => x < 10,
    (x) => x + 1,
    (x) => x,
  );
}
