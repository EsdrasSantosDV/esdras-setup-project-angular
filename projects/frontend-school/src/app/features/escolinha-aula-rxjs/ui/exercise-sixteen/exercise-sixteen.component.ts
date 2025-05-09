import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { delay, fromEvent, mergeMap, of } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-sixteen',
  standalone: true,
  imports: [],
  templateUrl: './exercise-sixteen.component.html',
  styleUrl: './exercise-sixteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseSixteenComponent implements AfterViewInit {
  @ViewChild('requestButton', { static: true }) requestButton!: ElementRef;
  private counter = 0;

  ngAfterViewInit(): void {
    fromEvent(this.requestButton.nativeElement, 'click')
      .pipe(mergeMap(() => this.simulateRequest()))
      .subscribe((result) => {
        console.log('Resposta recebida:', result);
      });
  }

  simulateRequest() {
    this.counter++;
    const response = `Requisição #${this.counter} finalizada`;
    return of(response).pipe(delay(2000)); // simula delay de 2s
  }
}
