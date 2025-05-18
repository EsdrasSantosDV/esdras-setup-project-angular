import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, mergeMap, of, scan, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercise-sixteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-sixteen.component.html',
  styleUrl: './exercise-sixteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseSixteenComponent {
  private requisicaoSubject = new Subject<void>();
  private contador = 0;

  respostas$ = this.requisicaoSubject.pipe(
    mergeMap(() => {
      this.contador++;
      const id = this.contador;
      const delayTime = Math.floor(Math.random() * 2000 + 1000);
      return of(`✔️ Resposta da requisição ${id} (delay: ${delayTime}ms)`).pipe(delay(delayTime));
    }),
    scan((acc, resposta) => [...acc, resposta], [] as string[]),
  );

  dispararRequisicao(): void {
    this.requisicaoSubject.next();
  }
}
