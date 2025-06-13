import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-eighteen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-eighteen.component.html',
  styleUrl: './exercise-eighteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseEighteenComponent {
  searchControl = new FormControl('');

  searchResults$: Observable<string> = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    tap(() => console.log('Starting new search...')),
    switchMap((term) => {
      return of(`Search results for: ${term}`).pipe(tap(() => console.log('Search completed')));
    }),
  );
}
