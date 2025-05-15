import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, fromEvent, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercise-fifteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-fifteen.component.html',
  styleUrl: './exercise-fifteen.component.scss',
})
export class ExerciseFifteenComponent implements AfterViewInit {
  @ViewChild('inputWord', { static: true }) inputWord!: ElementRef<HTMLInputElement>;

  filteredWord$!: Observable<string>;

  ngAfterViewInit() {
    this.filteredWord$ = fromEvent(this.inputWord.nativeElement, 'input').pipe(
      map((event: Event) => (event.target as HTMLInputElement).value.trim()),
      filter((word: string) => word.length === 0 || word.toLowerCase().startsWith('a')),
    );
  }
}
