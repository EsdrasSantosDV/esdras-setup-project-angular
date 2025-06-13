import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-fourteen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-fourteen.component.html',
  styleUrl: './exercise-fourteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFourteenComponent {
  form: FormGroup;

  message$: Observable<string>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
    });

    this.message$ = combineLatest([
      this.form.get('name')?.valueChanges || [],
      this.form.get('age')?.valueChanges || [],
    ]).pipe(
      map(([name, age]) => {
        if (name && age) {
          return `Olá, ${name}! Você tem ${age} anos`;
        }
        return '';
      }),
    );
  }
}
