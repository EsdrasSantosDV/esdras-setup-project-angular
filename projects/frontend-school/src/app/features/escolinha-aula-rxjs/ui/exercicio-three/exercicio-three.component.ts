import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent {
  value$ = interval(1000).pipe(
    map((value) => {
      if (value <= 10) return value;
      return null;
    }),
  );

  powerValue$ = this.value$.pipe(
    map((value) => {
      if (value !== null) return Math.pow(value, 2);
      return null;
    }),
  );
}
