import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-one',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercicio-one.component.html',
  styleUrl: './exercicio-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioOneComponent {
  fonte$ = interval(1000);
}
