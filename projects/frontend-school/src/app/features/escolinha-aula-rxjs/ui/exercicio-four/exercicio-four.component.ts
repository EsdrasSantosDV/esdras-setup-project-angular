import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-four',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './exercicio-four.component.html',
  styleUrl: './exercicio-four.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/* 
  Explicação: Criei um interval que emite valores de 0 a 35 a cada segundo.
  Quando o valor emitido for 35, armazena esse valor em uma variável e imprime no console.
  O valor é armazenado em uma variável para usá-lo no template.
*/
export class ExercicioFourComponent implements OnInit {
  interval$!: Observable<number>;
  valueAt35!: number;

  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      take(36),
      tap((value) => {
        if (value === 35) {
          this.valueAt35 = value;
          console.log('Ex04 - Interval value:', value);
        }
      }),
    );
  }
}
