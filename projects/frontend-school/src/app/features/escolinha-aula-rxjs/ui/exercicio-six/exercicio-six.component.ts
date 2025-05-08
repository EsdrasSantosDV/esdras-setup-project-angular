import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-six',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercicio-six.component.html',
  styleUrl: './exercicio-six.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSixComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [''],
  });

  showText = false;

  displayShow$ = this.form.controls.name.valueChanges
    .pipe(distinctUntilChanged())
    .subscribe((value) => console.log('Exercicio 6', value));
}
