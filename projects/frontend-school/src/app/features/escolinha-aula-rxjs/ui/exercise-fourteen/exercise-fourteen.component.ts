import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'esdras-khan-exercise-fourteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-fourteen.component.html',
  styleUrl: './exercise-fourteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
    Explicação:
    - O valor do formulário é armazenado em um FormGroup.
    - O valor do formulário é exibido no template com pipe async.
    - O FormGroup tem dois campos: name e age.
    - O campo name é obrigatório.
    - O campo age é obrigatório e deve ser maior ou igual a 0.
    - Usei um metódo para retornar a mensagem quando tiver idade e name.
    - Achei interessante que ngIf aceita um metodo
  */
export class ExerciseFourteenComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
    });
  }

  get message(): string | null {
    const { name, age } = this.form.value;
    return this.form.valid ? `Olá, ${name}! Você tem ${age} anos` : null;
  }
}
