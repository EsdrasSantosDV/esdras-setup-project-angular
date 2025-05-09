import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { concatMap, delay, fromEvent, of } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-seventeen',
  standalone: true,
  imports: [],
  templateUrl: './exercise-seventeen.component.html',
  styleUrl: './exercise-seventeen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseSeventeenComponent implements AfterViewInit {
  @ViewChild('sequentialButton', { static: true }) sequentialButton!: ElementRef;
  private requestId = 0;

  ngAfterViewInit(): void {
    fromEvent(this.sequentialButton.nativeElement, 'click')
      .pipe(concatMap(() => this.simulateSequentialRequest()))
      .subscribe((result) => {
        console.log('Finalizou:', result);
      });
  }

  simulateSequentialRequest() {
    this.requestId++;
    const result = `Requisição ${this.requestId} completa`;
    return of(result).pipe(delay(2000)); // simula delay de 2s
  }
}
