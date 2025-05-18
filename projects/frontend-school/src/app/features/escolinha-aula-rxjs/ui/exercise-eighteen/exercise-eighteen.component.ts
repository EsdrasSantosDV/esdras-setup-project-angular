import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, fromEvent, map, Observable, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eighteen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-eighteen.component.html',
  styleUrl: './exercise-eighteen.component.scss',
})
export class ExerciseEighteenComponent implements AfterViewInit {
  @ViewChild('searchField') inputRef!: ElementRef<HTMLInputElement>;

  resultado$!: Observable<string>;

  ngAfterViewInit(): void {
    this.resultado$ = fromEvent<InputEvent>(this.inputRef.nativeElement, 'input').pipe(
      debounceTime(500),
      map((event) => (event.target as HTMLInputElement).value.trim()),
      distinctUntilChanged(),
      switchMap((value) => {
        if (!value) return of('🔍 Aguardando entrada...');
        return of(`📄 Resultado para: "${value}"`).pipe(delay(500));
      }),
      startWith('Digite algo para começar...'),
    );
  }
}
