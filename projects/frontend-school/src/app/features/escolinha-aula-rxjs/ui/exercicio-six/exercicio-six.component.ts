import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-six',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-six.component.html',
  styleUrl: './exercicio-six.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSixComponent implements OnInit {
  inputControl = new FormControl('');

  ngOnInit(): void {
    this.inputControl.valueChanges
      .pipe(distinctUntilChanged()) // só emite quando o valor for diferente
      .subscribe((value) => {
        console.log('Novo valor:', value);
      });
  }
}
