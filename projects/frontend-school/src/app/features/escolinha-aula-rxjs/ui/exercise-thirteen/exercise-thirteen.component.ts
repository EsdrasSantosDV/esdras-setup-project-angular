import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, scan, startWith } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-thirteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-thirteen.component.html',
  styleUrl: './exercise-thirteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseThirteenComponent implements OnInit {
  @ViewChild('butao', { static: true }) button!: ElementRef;

  ngOnInit(): void {
    const fonte$ = fromEvent(this.button.nativeElement, 'click').pipe(
      startWith(0),
      scan((acc) => acc + 1, 0),
    );

    fonte$.subscribe((value) => {
      console.log(value);
    });
  }
}
