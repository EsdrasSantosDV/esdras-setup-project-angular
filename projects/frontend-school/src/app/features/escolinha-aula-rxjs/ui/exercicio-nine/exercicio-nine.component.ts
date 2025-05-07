import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, range } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-nine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-nine.component.html',
  styleUrl: './exercicio-nine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioNineComponent {
  firstGreaterThanFive$: Observable<number> = range(1, 10).pipe(
    tap((num) => console.log('Número emitido:', num)),
    filter((num) => {
      console.log('Verificando se', num, 'é maior que 5');
      return num > 5;
    }),
    tap((num) => console.log('Número maior que 5 encontrado:', num)),
    first(),
    tap((num) => console.log('Primeiro número maior que 5 selecionado:', num)),
  );
}
