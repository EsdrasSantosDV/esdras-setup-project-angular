import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-fifteen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-fifteen.component.html',
  styleUrl: './exercise-fifteen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//Implemente um campo de entrada de texto onde as
// palavras digitadas são filtradas e apenas as que começam com a letra "A" ou "a" são exibidas no console.
export class ExerciseFifteenComponent {
  palavraControl = new FormControl('');

  palavraFiltrada$ = this.palavraControl.valueChanges.pipe(
    filter((valor): valor is string => valor !== null && valor.trim().length > 0),
    filter((valor: string) => valor.charAt(0).toLowerCase() === 'a'),
    tap((palavra: string) => console.log(`Palavra filtrada: ${palavra}`)),
  );
  ngOnInit() {}
}

/*
 Excelente!
*/
