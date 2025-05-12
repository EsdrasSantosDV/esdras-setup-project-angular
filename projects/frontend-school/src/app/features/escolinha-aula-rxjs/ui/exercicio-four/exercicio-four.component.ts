import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-four.component.html',
  styleUrl: './exercicio-four.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//Faça uma fonte Observable que emite valores ao longo do tempo a cada 1 segundo
// e quando essa fonte emitir o valor 35, faça um console.log.
export class ExercicioFourComponent {
  fonte$ = interval(1000).pipe(
    tap((valor) => {
      if (valor === 35) {
        console.log('Valor 35 emitido!');
      }
    }),
  );
}

/*
 Excelente!
*/
