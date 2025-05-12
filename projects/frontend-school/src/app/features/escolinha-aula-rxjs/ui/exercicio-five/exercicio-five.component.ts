import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-five',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercicio-five.component.html',
  styleUrl: './exercicio-five.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFiveComponent implements OnInit {
  fb = inject(FormBuilder);
  formX = this.fb.group({
    search: [''],
  });

  ngOnInit() {
    this.formX.valueChanges
      .pipe(
        debounceTime(1000),
        tap((value) => {
          console.log('Exercise 5: ', value?.search || '');
        }),
      )
      .subscribe();
  }
}
