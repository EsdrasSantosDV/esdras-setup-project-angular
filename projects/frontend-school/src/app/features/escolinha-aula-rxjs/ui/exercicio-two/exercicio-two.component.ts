import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'esdras-khan-exercicio-two',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-two.component.html',
  styleUrl: './exercicio-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTwoComponent implements OnInit {
  fb = inject(FormBuilder);

  formiga = this.fb.group({
    formigaType: [''],
  });

  ngOnInit(): void {
    this.formiga.get('formigaType')?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
