import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, scan } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseThirteenComponent implements AfterViewInit {
  @ViewChild('countButton', { static: true }) countButton!: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.countButton.nativeElement, 'click')
      .pipe(scan((count) => count + 1, 0))
      .subscribe((valor) => {
        console.log('Total de cliques:', valor);
      });
  }
}
