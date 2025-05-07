import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercise-eleven',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-eleven.component.html',
  styleUrl: './exercise-eleven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioElevenComponent implements OnInit {
  readonly registeredUsers = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    'Charlie Black',
    'Diana White',
    'Ethan Green',
    'Fiona Blue',
    'George Yellow',
    'Hannah Purple',
  ];

  private fb = inject(FormBuilder);

  usuario = this.fb.group({
    writeUsuario: ['', [], [this.usernameAsyncValidator(this.registeredUsers)]],
  });

  ngOnInit(): void {
    this.usuario.get('writeUsuario')?.statusChanges.subscribe((status) => {
      const control = this.usuario.get('writeUsuario');

      if (control?.errors?.['usernameTaken']) {
        console.log('❌ Nome de usuário já registrado.');
      } else if (status === 'VALID') {
        console.log('✅ Nome de usuário disponível.');
      }
    });
  }

  usernameAsyncValidator(userList: string[]): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;

      if (typeof value !== 'string' || !value.trim()) {
        return of(null);
      }

      const name = value.trim().toLowerCase();

      const isTaken = userList.some((user) => user.trim().toLowerCase() === name);

      return of(isTaken ? { usernameTaken: true } : null).pipe(delay(800));
    };
  }
}
