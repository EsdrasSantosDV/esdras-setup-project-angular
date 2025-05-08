import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-sixteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-sixteen.component.html',
  styleUrl: './exercise-sixteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseSixteenComponent {
  simulateRequest() {
    of('Requisição concluída!')
      .pipe(
        delay(2000),
        tap((response) => console.log('Exercicio 16 - ', response)),
      )
      .subscribe();
  }
}
