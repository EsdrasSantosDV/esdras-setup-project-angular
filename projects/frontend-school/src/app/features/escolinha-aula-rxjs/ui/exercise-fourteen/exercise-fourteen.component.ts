import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, filter, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercise-fourteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-fourteen.component.html',
  styleUrl: './exercise-fourteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFourteenComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: [''],
    age: [''],
  });

  message$ = this.showMessage();

  showMessage() {
    const name$ = this.form.controls['name'].valueChanges.pipe(startWith(''));
    const age$ = this.form.controls['age'].valueChanges.pipe(startWith(''));

    return combineLatest([name$, age$]).pipe(
      filter(([name, age]) => !!name && !!age),
      map(([name, age]) => `Olá ${name}, você tem ${age} anos!`),
    );
  }
}
