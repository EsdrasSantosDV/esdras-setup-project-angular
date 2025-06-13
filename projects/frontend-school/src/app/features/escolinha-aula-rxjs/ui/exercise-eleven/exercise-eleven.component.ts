import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-eleven',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercise-eleven.component.html',
  styleUrl: './exercise-eleven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseElevenComponent {
  names = ['joao', 'jose', 'maria', 'esdras', 'tião'];

  usernameControl = new FormControl('');

  usernameValidation$: Observable<{
    isValid: boolean;
    message: string;
  }> = this.usernameControl.valueChanges.pipe(
    debounceTime(500),
    map((username) => {
      if (!username) {
        return { isValid: false, message: 'Nome de usuário é obrigatório' };
      }
      if (this.names.includes(username.toLowerCase())) {
        return { isValid: false, message: 'Nome de usuário já está sendo utilizado' };
      }
      return { isValid: true, message: 'Nome de usuário está disponível' };
    }),
  );
}
