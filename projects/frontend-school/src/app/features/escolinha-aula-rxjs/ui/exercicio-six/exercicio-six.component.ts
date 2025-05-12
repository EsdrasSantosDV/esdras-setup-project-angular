import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-six',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercicio-six.component.html',
  styleUrl: './exercicio-six.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSixComponent implements OnInit {
  fb = inject(FormBuilder);

  formX = this.fb.group({
    search: [''],
  });

  ngOnInit() {
    this.formX.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((value) => {
      this.handleSearch(value?.search || '');
    });
  }

  handleSearch(value: string) {
    console.log('Search value:', value);
  }
}

/*
 Excelente!
 mas pontos de melhoria
   this.formX.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((value) => {
      this.handleSearch(value?.search || '');
    });

  const search$ = this.formX.valueChanges.pipe(debounceTime(500), distinctUntilChanged(),tap((value) => {
    this.handleSearch(value?.search || '');
  }));
  deixe sempre o subscribe clean, e não insira logicas adicionais no subscribe, como o debounceTime, deixe isso para o pipe
  dado que o seu assinante não precise fazer nada além de receber o valor emitido pelo observable.
*/
