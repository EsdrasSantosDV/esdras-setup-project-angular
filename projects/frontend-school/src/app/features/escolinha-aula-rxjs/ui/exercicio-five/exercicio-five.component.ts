import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-five',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercicio-five.component.html',
  styleUrl: './exercicio-five.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFiveComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [''],
  });

  show$ = this.form.valueChanges;

  eupa: string | null = null;

  constructor() {
    this.show$.pipe(debounceTime(1000)).subscribe((value) => {
      this.eupa = value.name || null;
      // console.log(value);
    });
  }
}
