import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-fourteen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-fourteen.component.html',
  styleUrl: './exercise-fourteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFourteenComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [''],
    age: [''],
  });

  message$ = combineLatest([
    this.form.controls.name.valueChanges.pipe(startWith('')),
    this.form.controls.age.valueChanges.pipe(startWith('')),
  ]).pipe(map(([name, age]) => (name && age ? `Olá, ${name}! Você tem ${age} anos.` : '')));
}
