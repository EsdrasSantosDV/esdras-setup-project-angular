import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-six',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-six.component.html',
  styleUrl: './exercicio-six.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Implemente um campo de formulário onde o valor digitado seja
// logado no console somente se for diferente do valor anterior.
export class ExercicioSixComponent implements OnInit {
  formGroup = new FormGroup({
    search: new FormControl(''),
  });
  ngOnInit() {
    this.formGroup.valueChanges
      .pipe(
        distinctUntilChanged(),
        tap((value) => {
          console.log('Novo valor:', value.search);
        }),
      )
      .subscribe();
  }
}

/*
 Excelente!
 mas voce poderia ter feito o subscribe no template, e nao no ts.
 deixe sempre o subscribe no template, e nao no ts. deixe o framework trabalhar pra ti
 quando o compoinente e destruido, o subscribe e destruido automaticamente, nao precisa se preocupar com isso.

 */
