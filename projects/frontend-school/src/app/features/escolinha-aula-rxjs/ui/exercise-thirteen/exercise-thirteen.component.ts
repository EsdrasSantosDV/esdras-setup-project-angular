import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, scan } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThirteenComponent {
  @ViewChild('botaoContador') botaoRef!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    fromEvent(this.botaoRef.nativeElement, 'click')
      .pipe(scan((acc) => acc + 1, 0))
      .subscribe((count) => {
        console.log('Total de cliques:', count);
      });
  }
}
