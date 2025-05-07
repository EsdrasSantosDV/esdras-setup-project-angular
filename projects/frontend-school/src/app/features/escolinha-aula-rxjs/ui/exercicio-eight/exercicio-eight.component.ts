import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-eight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-eight.component.html',
  styleUrl: './exercicio-eight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioEightComponent {
  values$: Observable<number[]> = interval(1000).pipe(take(5), toArray());
}
