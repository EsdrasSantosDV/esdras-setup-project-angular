import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, map, range, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent implements OnInit, OnDestroy {
  array: number[] = [];

  fonte$ = range(1, 10).pipe(
    map((value) => value * value),
    tap((value) => {
      this.array.push(value);
    }),
  );

  ngOnInit(): void {
    this.fonte$.pipe(debounceTime(1000)).subscribe();
  }

  ngOnDestroy(): void {
    this.fonte$.subscribe().unsubscribe();
  }
}
