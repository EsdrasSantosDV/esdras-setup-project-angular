import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { delay, exhaustMap, fromEvent, of } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-nineteen',
  standalone: true,
  imports: [],
  templateUrl: './exercise-nineteen.component.html',
  styleUrl: './exercise-nineteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseNineteenComponent implements AfterViewInit {
  @ViewChild('loginButton', { static: true }) loginButton!: ElementRef;
  private attemptCount = 0;

  ngAfterViewInit(): void {
    fromEvent(this.loginButton.nativeElement, 'click')
      .pipe(exhaustMap(() => this.simulateLoginRequest()))
      .subscribe((result) => {
        console.log('Login finalizado:', result);
      });
  }

  simulateLoginRequest() {
    this.attemptCount++;
    const result = `Tentativa #${this.attemptCount} concluída`;
    return of(result).pipe(delay(3000)); // simula delay de 3s
  }
}
