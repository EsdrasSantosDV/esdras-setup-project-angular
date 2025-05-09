import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-twelve',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AsyncPipe],
  templateUrl: './exercise-twelve.component.html',
  styleUrl: './exercise-twelve.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação:
  - O valor do input é armazenado em um FormControl.
  - O valor do input é emitido a cada vez que o valor muda e armazenado em um observable.
  - O valor do input é exibido no template.
*/
export class ExerciseTwelveComponent implements OnInit {
  textControl = new FormControl();
  valueChange$!: Observable<string>;

  ngOnInit(): void {
    this.valueChange$ = this.textControl.valueChanges.pipe(
      tap((value) => console.log('Ex12 - Valor do formControl:', value)),
    );
  }
}
