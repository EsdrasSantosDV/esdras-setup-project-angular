import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, tap } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercise-eleven',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercise-eleven.component.html',
  styleUrl: './exercise-eleven.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Implemente um campo de texto onde o usuário digita um nome de usuário.
// Simule uma validação assíncrona que verifica se o nome de usuário está disponível.
// Para isso, crie um conjunto de nomes de usuário "já registrados" e, ao digitar, verifique se o nome está nessa lista.
// Aguarde o usuário parar de digitar antes de verificar a disponibilidade.
export class ExerciseElevenComponent implements OnInit {
  private registeredUsernames = ['Bruno', 'Lucas', 'Ana', 'Maria', 'Pedro'];
  isUsernameAvailable(username: string): boolean {
    return !this.registeredUsernames.includes(username);
  }
  formGroup = new FormGroup({
    search: new FormControl(''),
  });

  status$ = this.formGroup.get('search')!.valueChanges.pipe(
    debounceTime(500),
    map((value) => {
      return this.isUsernameAvailable(value || '') ? 'Disponível' : 'Indisponível';
    }),
  );

  ngOnInit() {}
}


/*
 Excelente!
*/
