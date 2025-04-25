import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-two',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercicio-two.component.html',
  styleUrl: './exercicio-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTwoComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  fonte$ = interval(1000);

  form = this.formBuilder.group({
    value: [''],
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
