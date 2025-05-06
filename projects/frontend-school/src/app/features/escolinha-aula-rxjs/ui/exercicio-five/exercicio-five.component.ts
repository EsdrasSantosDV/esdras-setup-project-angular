import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-five',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-five.component.html',
  styleUrl: './exercicio-five.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Implemente um campo de busca onde a requisição seja feita somente após o
// usuário parar de digitar por um determinado período de tempo.
export class ExercicioFiveComponent implements OnInit {
  formGroup = new FormGroup({
    search: new FormControl(''),
  });

  ngOnInit() {
    this.formGroup
      .get('search')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((value) => {
        console.log('Valor de busca:', value);
      });
  }
}
