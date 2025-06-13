import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-fifteen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-fifteen.component.html',
  styleUrl: './exercise-fifteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFifteenComponent {
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        filter((value): value is string => value !== null && value.toLowerCase().startsWith('a')),
        tap((value) => console.log(`Palavra que começa com 'A': ${value}`)),
      )
      .subscribe();
  }
}
