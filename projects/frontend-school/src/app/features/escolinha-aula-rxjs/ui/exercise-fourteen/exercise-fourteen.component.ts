import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-fourteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-fourteen.component.html',
  styleUrl: './exercise-fourteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseFourteenComponent implements OnInit {
  form = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
  });
  mensagem$ = combineLatest([
    this.form.get('nome')!.valueChanges.pipe(startWith('')),
    this.form.get('idade')!.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([nome, idade]) => {
      if (nome && idade) {
        return `Olá, ${nome}! Você tem ${idade} anos.`;
      }
      return '';
    }),
  );

  ngOnInit() {}
}


/*
 Excelente!
*/
