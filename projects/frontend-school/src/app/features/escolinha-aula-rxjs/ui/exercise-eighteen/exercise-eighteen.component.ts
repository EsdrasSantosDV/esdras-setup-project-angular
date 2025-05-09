import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, of, switchMap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eighteen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-eighteen.component.html',
  styleUrl: './exercise-eighteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseEighteenComponent implements OnInit {
  searchControl = new FormControl('');
  requestId = 0;

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        switchMap((value) => this.simulateSearch(value ?? '')),
      )
      .subscribe((result) => {
        console.log('Resultado da busca:', result);
      });
  }

  simulateSearch(query: string) {
    const id = ++this.requestId;
    return of(`Resultado da requisição #${id} para "${query}"`).pipe(delay(2000));
  }
}
