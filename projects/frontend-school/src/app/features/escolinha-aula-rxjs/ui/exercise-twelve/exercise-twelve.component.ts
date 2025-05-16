import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, pipe, Subject } from 'rxjs';
import { withLatestFrom, map, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-twelve',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-twelve.component.html',
  styleUrl: './exercise-twelve.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseTwelveComponent {
  textControl = new FormControl('');

  private buttonClick$ = new Subject<void>();

  buttonClickWithText$: Observable<string> = this.buttonClick$.pipe(
    tap(() => console.log('Botão clicado')),
    withLatestFrom(this.textControl.valueChanges),
    tap(([_, text]) => console.log('Texto capturado:', text)),
    map(([_, text]) => text || ''),
    tap(finalText => console.log('Texto final:', finalText))
  );

  onButtonClick(): void {
    this.buttonClick$.next();
  }
}
