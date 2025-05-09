import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eighteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AsyncPipe],
  templateUrl: './exercise-eighteen.component.html',
  styleUrl: './exercise-eighteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação:
  - O componente usa o FormControl para armazenar o valor da busca.
  - O searchControl é um FormControl que armazena o valor da busca.
  - O searchResult$ é um Observable que emite o resultado da busca.
  - O debounceTime(300) espera 300ms antes de emitir o valor.
  - O distinctUntilChanged() evita que o mesmo valor seja emitido várias vezes.
  - O switchMap() troca o Observable atual por um novo Observable, cancelando o outro.
  - O simulateRequest() simula uma requisição HTTP com um delay de 1 segundo.
*/
export class ExerciseEighteenComponent {
  searchControl = new FormControl('');
  searchResult$ = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((query) => {
      if (query === null) {
        return of('');
      }
      return this.simulateRequest(query).pipe(tap((result) => console.log('Resultado da busca:', result)));
    }),
  );

  simulateRequest(query: string) {
    return of(`Resultado para "${query}"`).pipe(delay(1000));
  }
}
