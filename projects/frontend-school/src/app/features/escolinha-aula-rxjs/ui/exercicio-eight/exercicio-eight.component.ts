import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-eight',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercicio-eight.component.html',
  styleUrl: './exercicio-eight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioEightComponent {
  fonte$ = interval(1000).pipe(take(5));
}
