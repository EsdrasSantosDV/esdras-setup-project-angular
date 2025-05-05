import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-two',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './exercicio-two.component.html',
  styleUrl: './exercicio-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/*
  Explicação, criei um formControl, me inscrevi no seu valueChanges e dou um console.log
  quando o valor mudar, no ngOnDestroy cancelo a subscrição.
  Além disso, também estou mostrando o valor do formControl no template.
*/
export class ExercicioTwoComponent implements OnInit {
  textControl = new FormControl();
  valueChange$!: Observable<string>;

  ngOnInit(): void {
    this.valueChange$ = this.textControl.valueChanges.pipe(
      tap((value) => console.log('Ex02 - Valor do formControl:', value)),
    );
  }
}
