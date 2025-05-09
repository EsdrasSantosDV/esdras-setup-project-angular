import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, skip, take } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-seven',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercicio-seven.component.html',
  styleUrl: './exercicio-seven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSevenComponent {
  fonte$ = interval(1000).pipe(skip(4)).pipe(take(7));
}
