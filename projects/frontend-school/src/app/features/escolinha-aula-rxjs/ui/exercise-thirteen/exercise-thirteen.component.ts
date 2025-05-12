import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { fromEvent, map, scan, startWith, Subject } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Crie uma fonte que emite cliques de botão, e cada clique deve somar +1 a um contador acumulado.
export class ExerciseThirteenComponent {
  private clickSubject = new Subject<void>();

  clickCount$ = this.clickSubject.asObservable().pipe(
    scan((count) => count + 1, 0),
    startWith(0),
  );

  emitClick(): void {
    this.clickSubject.next();
  }
}

/*
 Excelente, GOSTEI DESSE SCAN, COM O STARTWITH.
*/
