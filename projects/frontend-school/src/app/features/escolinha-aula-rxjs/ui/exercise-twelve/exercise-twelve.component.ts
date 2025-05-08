import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, tap, withLatestFrom } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-twelve',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-twelve.component.html',
  styleUrl: './exercise-twelve.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTwelveComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [''],
  });

  click() {
    console.log('Exercicio 12', this.form.get('name')?.value);
  }
}
