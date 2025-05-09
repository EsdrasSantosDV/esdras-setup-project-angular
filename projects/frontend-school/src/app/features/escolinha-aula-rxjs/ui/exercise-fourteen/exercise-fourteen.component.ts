import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-fourteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-fourteen.component.html',
  styleUrl: './exercise-fourteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFourteenComponent implements OnInit {
  form: FormGroup;
  mensagem: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [''],
      idade: [''],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        filter(({ nome, idade }) => !!nome && !!idade), // só continua se ambos estiverem preenchidos
      )
      .subscribe(({ nome, idade }) => {
        this.mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
        console.log(this.mensagem);
      });
  }
}
