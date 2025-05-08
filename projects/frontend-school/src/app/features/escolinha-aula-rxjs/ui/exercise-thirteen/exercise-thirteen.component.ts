import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseThirteenComponent implements AfterViewInit {
  @ViewChild('button', { read: ElementRef })
  button!: ElementRef;

  totalClicks = 0;

  ngAfterViewInit() {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        tap(() => {
          this.totalClicks += 1;
          console.log(`Exercicio 13 - Clicou ${this.totalClicks} vezes`);
        }),
      )
      .subscribe();
  }
}
