import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-four.component.html',
  styleUrl: './exercicio-four.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFourComponent {
  valor$ = interval(1000).pipe(
    map((value) => {
      if (value === 35) {
        console.log('Chegou no 35');
      }
      return value;
    }),
  );
}
