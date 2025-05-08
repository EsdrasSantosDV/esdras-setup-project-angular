import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-one.component.html',
  styleUrl: './exercicio-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioOneComponent {
  number$ = interval(1000);
}
