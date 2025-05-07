import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounce, interval } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-five',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-five.component.html',
  styleUrl: './exercicio-five.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFiveComponent implements OnInit {
  fb = inject(FormBuilder);

  papel = this.fb.group({
    writeInPaper: [''],
  });

  ngOnInit(): void {
    this.papel
      .get('writeInPaper')
      ?.valueChanges.pipe(debounce(() => interval(1000)))
      .subscribe((value) => {
        console.log(value);
      });
  }
}
