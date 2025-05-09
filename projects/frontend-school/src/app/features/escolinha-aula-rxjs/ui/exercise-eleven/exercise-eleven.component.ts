import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, filter, Observable, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eleven',
  standalone: true,
  imports: [CommonModule, AsyncPipe, ReactiveFormsModule],
  templateUrl: './exercise-eleven.component.html',
  styleUrl: './exercise-eleven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação:
  - O valor do input é armazenado em um FormControl.
  - O valor do input é verificado a cada 1 segundo.
  - Se o valor do input não for nulo e estiver na lista de usuários, é emitido um BehaviorSubject com o valor true.
  - Se o valor do input não for nulo e não estiver na lista de usuários, é emitido um BehaviorSubject com o valor false.
  - O valor do input é filtrado para não emitir valores nulos ou que estejam na lista de usuários.
*/
export class ExerciseElevenComponent implements OnInit {
  userControl = new FormControl();
  valueSearched!: Observable<string | null>;
  users = ['Diogo', 'Maria', 'João', 'Ana', 'Pedro', 'Lucas', 'Fernanda', 'Juliana', 'Carlos', 'Mariana'];
  isInList = new BehaviorSubject<boolean>(false);

  ngOnInit() {
    this.valueSearched = this.userControl.valueChanges.pipe(
      debounceTime(1000),
      tap((value) => {
        const isPresent = value !== null && this.users.includes(value);
        this.isInList.next(isPresent);
      }),
      filter((value) => value !== null && !this.users.includes(value)),
    );
  }
}
