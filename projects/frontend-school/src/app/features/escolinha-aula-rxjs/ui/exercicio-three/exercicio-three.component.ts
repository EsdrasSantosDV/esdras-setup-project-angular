import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { interval, map, range, take, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'esdras-khan-exercicio-three',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './exercicio-three.component.html',
  styleUrl: './exercicio-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioThreeComponent implements OnInit {
  fb = inject(FormBuilder);

  string: string = 'Maria';

  interval$ = interval(1000).pipe(take(10));
  printedValue$ = this.interval$.pipe(
    map((value) => value * 2),
    tap((value) => {
      this.string += String(value);
      this.reactiveForm.controls['name'].setValue(this.string);
    }),
  );

  reactiveForm = this.fb.group({
    name: [''],
  });

  ngOnInit(): void {
    this.printedValue$.subscribe();
  }
}
