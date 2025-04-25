import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { filter, range, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-seven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio-seven.component.html',
  styleUrl: './exercicio-seven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSevenComponent implements OnInit, OnDestroy {
  array: number[] = [];

  fonte$ = range(1, 10).pipe(
    filter((value) => ![1, 2, 3].includes(value)),
    tap((value) => this.array.push(value)),
  );

  ngOnInit(): void {
    this.fonte$.subscribe();
  }

  ngOnDestroy(): void {
    this.fonte$.subscribe().unsubscribe();
  }
}
