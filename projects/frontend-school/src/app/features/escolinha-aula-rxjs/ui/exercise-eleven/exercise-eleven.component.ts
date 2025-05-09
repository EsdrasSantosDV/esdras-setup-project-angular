import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, filter, Observable, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eleven',
  standalone: true,
  imports: [CommonModule, AsyncPipe, ReactiveFormsModule],
  templateUrl: './exercise-eleven.component.html',
  styleUrl: './exercise-eleven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseElevenComponent implements OnInit {
  userControl = new FormControl();
  valueSearched!: Observable<string | null>;
  users = ['Breno', 'Carlos', 'Sergio', 'Lucas', 'Pedro'];
  isInList = new BehaviorSubject<boolean>(false);

  ngOnInit() {
    this.valueSearched = this.userControl.valueChanges.pipe(
      debounceTime(1000),
      tap((value) => {
        const isPresent = value !== null && this.users.includes(value);
        this.isInList.next(isPresent);
      }),
      filter((value) => value !== null && !this.users.includes(value)),
    );
  }
}
