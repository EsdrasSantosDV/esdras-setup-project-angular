import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { scan, startWith, Subject } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseThirteenComponent {
  private clickSubject = new Subject<void>();

  clickCount$ = this.clickSubject.asObservable().pipe(
    scan((count) => count + 1, 0),
    startWith(0),
  );

  emitClick(): void {
    this.clickSubject.next();
  }
}
