import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-fifteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AsyncPipe],
  templateUrl: './exercise-fifteen.component.html',
  styleUrl: './exercise-fifteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFifteenComponent implements OnInit {
  textControl = new FormControl('');
  textFiltered$!: Observable<string | null>;

  /*
    Explicação:
    - Utilizei o map no lugar do filter, pois com o filter, quando eu apagava tudo que estava no input,
    ele não conseguia mais passar pelo pipe, pois o filter não deixava passar valores nulos.
    - Com o map, eu consigo retornar null quando o valor não for válido, e o pipe continua funcionando.
    - Com isso, o textFiltered$ é sempre atualizado, mesmo quando ele está vazio.
  */

  ngOnInit() {
    this.textFiltered$ = this.textControl.valueChanges.pipe(
      tap((value) => console.log('Ex15 - Valor do formControl:', value)),
      map((value) => {
        if (value && value.length >= 0 && value[0].toLowerCase() === 'a') {
          console.log('Ex15 - Valor do formControl:', value[0].toLowerCase() === 'a');
          return value;
        }
        return null;
      }),
    );
  }
}
