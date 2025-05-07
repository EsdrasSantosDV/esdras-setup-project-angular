import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'esdras-khan-exercise-twelve',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise-twelve.component.html',
  styleUrl: './exercise-twelve.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTwelveComponent {
  private fb = inject(FormBuilder);

  livro = this.fb.group({
    nome: [''],
  });

  printNome() {
    console.log(this.livro.get('nome')?.value);
  }
}
