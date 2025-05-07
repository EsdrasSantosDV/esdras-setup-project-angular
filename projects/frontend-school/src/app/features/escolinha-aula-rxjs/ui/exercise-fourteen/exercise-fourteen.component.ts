import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'esdras-khan-exercise-fourteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-fourteen.component.html',
  styleUrl: './exercise-fourteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFourteenComponent implements OnInit {
  fb = inject(FormBuilder);

  formulario = this.fb.group({
    nome: [''],
    idade: [''],
  });

  mensagem: string = '';

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe(({ nome, idade }) => {
      if (nome && idade) {
        this.mensagem = `Olá, ${nome}! Você tem ${idade} anos`;
      } else {
        this.mensagem = '';
      }
    });
  }
}
