import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, takeWhile, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-four.component.html',
  styleUrl: './exercicio-four.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFourComponent {
  numbers$ = interval(1000).pipe(
    takeWhile((n) => n < 36),
    tap((n) => {
      if (n === 35) {
        console.log('O número é: ' + n);
      }
    }),
  );
}

/*
não precisava do takeWhile, seria na vdd so o efeito colateral do tap, que é o console.log
*/
