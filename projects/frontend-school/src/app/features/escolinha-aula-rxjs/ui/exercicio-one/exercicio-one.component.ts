import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-one.component.html',
  styleUrl: './exercicio-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioOneComponent {
  value = signal<number>(0);

  constructor() {
    effect(() => {
      const count = interval(1000)
        .pipe(take(100))
        .subscribe((val) => {
          this.value.set(val);
        });
      return () => count.unsubscribe();
    });
  }
}
