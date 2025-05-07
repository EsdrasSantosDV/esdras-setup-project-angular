import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-six',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-six.component.html',
  styleUrl: './exercicio-six.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSixComponent implements OnInit {
  fb = inject(FormBuilder);

  senha = this.fb.group({
    writeSenha: [''],
  });

  ngOnInit(): void {
    const writeSenha$ = this.senha.get('writeSenha')?.valueChanges.pipe(distinctUntilChanged());

    writeSenha$?.subscribe((value) => {
      console.log(value);
    });
  }
}
