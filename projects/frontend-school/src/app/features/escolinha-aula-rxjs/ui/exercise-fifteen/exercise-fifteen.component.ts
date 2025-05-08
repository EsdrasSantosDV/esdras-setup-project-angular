import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-fifteen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-fifteen.component.html',
  styleUrl: './exercise-fifteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFifteenComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    word: [''],
  });

  constructor() {
    this.form.controls.word.valueChanges
      .pipe(filter((value): value is string => !!value && (value.startsWith('A') || value.startsWith('a'))))
      .subscribe((filteredValue) => console.log('Exercicio 15 -', filteredValue));
  }
}
