import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-four.component.html',
  styleUrl: './exercicio-four.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFourComponent {
  isTarget = false;

  number$ = interval(1000).pipe(
    tap((value) => {
      // console.log(value);
      if (value === 35) {
        console.log('Exercicio 4', value);
        this.isTarget = true;
      }
    }),
  );
}
