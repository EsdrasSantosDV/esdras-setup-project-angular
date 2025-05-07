import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, range, toArray } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-seven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-seven.component.html',
  styleUrl: './exercicio-seven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSevenComponent {
  values$: Observable<number[]> = range(1, 10).pipe(skip(3), toArray());
}
