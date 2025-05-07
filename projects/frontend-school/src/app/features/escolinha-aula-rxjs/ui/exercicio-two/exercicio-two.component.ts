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

  abobora = this.fb.group({
    aboboraType: [''],
  });

  ngOnInit(): void {
    this.abobora.get('aboboraType')?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
