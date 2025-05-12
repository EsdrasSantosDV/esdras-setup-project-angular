import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'esdras-khan-exercicio-five',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './exercicio-five.component.html',
  styleUrl: './exercicio-five.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFiveComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    value: [''],
  });
}
