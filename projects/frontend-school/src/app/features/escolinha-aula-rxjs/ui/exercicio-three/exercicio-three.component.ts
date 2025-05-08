import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, range } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent {
  number$ = range(1, 10).pipe(map((value) => value ** 2));

  squarenumber$ = this.number$.pipe(
    map((value) => value ** 2),
    // console.log('quadrado', value ** 2);
  );
}
