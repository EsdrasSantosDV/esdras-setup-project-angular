import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercise-twelve',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-twelve.component.html',
  styleUrl: './exercise-twelve.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTwelveComponent {
  inputValue: FormControl = new FormControl('');

  constructor() {
    this.inputValue.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((value) => {
      console.log('Exercise 12: ', value);
    });
  }

  handleSubmit() {
    console.log('Exercise 12 (click): ', this.inputValue.value);
  }
}
