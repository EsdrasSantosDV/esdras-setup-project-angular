import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, of, switchMap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eleven',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-eleven.component.html',
  styleUrl: './exercise-eleven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseElevenComponent implements OnInit {
  usernameControl = new FormControl('');
  existingUsernames = ['luiz', 'folador', 'lulu'];

  ngOnInit(): void {
    this.usernameControl.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((value) => this.simulateUsernameCheck(value)),
      )
      .subscribe((isAvailable) => {
        console.log(isAvailable ? '✅ Nome disponível' : '❌ Nome já registrado');
      });
  }

  simulateUsernameCheck(username: string | null) {
    const isAvailable = !this.existingUsernames.includes(username?.toLowerCase() || '');
    return of(isAvailable).pipe(delay(1000)); // simula delay de chamada backend
  }
}
