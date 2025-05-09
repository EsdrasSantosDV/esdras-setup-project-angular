import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, of, switchMap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-twenty',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-twenty.component.html',
  styleUrl: './exercise-twenty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTwentyComponent implements OnInit {
  searchControl = new FormControl('');
  requestCounter = 0;

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((term) => this.search(term ?? '')),
      )
      .subscribe((result) => {
        console.log('🔍 Resultado:', result);
      });
  }

  search(term: string) {
    const requestId = ++this.requestCounter;
    return of(`Resultado da busca #${requestId} para "${term}"`).pipe(delay(1500));
  }
}
