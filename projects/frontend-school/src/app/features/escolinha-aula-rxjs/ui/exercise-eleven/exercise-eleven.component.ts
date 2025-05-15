import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eleven',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-eleven.component.html',
  styleUrl: './exercise-eleven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseElevenComponent {
  fb = inject(FormBuilder);
  cdr = inject(ChangeDetectorRef);
  form = this.fb.group({
    name: [''],
  });

  isTaken = false;
  hasChecked = false;

  private registeredNames = ['xitao', 'olavo', 'admin', 'dunha'];

  constructor() {
    this.form
      .get('name')!
      .valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((name) => {
          if (!name) {
            return of(false);
          }
          this.hasChecked = true;

          return of(this.registeredNames.includes(name));
        }),
      )
      .subscribe((result) => {
        this.isTaken = result;
        this.cdr.markForCheck();
      });
  }
}
