import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { count, filter, take } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-four.component.html',
  styleUrl: './exercicio-four.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFourComponent {
  value = signal<number>(0);

  constructor() {
    effect(() => {
      const count = interval(1000)
        .pipe(
          take(36),
          filter((val) => {
            if (val === 35) {
              console.log('Contador chegou a 35!');
            }
            return true;
          }),
        )
        .subscribe((val) => {
          this.value.set(val);
        });
      return () => count.unsubscribe();
    });
  }
}
