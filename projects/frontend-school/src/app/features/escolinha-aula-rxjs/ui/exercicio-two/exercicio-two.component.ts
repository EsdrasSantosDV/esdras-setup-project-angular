import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'esdras-khan-exercicio-two',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-two.component.html',
  styleUrl: './exercicio-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTwoComponent implements OnInit {
  aboboraBuilder = inject(FormBuilder);

  abobora = this.aboboraBuilder.group({
    aboboraType: [''],
  });

  ngOnInit(): void {
    this.abobora.get('aboboraType')?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
