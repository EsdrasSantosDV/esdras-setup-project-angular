import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, take, skip } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-eight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-eight.component.html',
  styleUrl: './exercicio-eight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//Crie uma fonte que emite valores a cada segundo e pare a emissão após os 5 primeiros valores.
export class ExercicioEightComponent {
  fonte$ = interval(1000).pipe(take(5));
}
