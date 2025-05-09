import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'esdras-khan-exercicio-four',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercicio-four.component.html',
  styleUrl: './exercicio-four.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFourComponent implements OnInit {
  fonte$ = interval(1000);

  ngOnInit() {
    this.fonte$.subscribe((valor) => {
      if (valor == 35) {
        console.log('Valor 35 emitido!');
      }
    });
  }
}
