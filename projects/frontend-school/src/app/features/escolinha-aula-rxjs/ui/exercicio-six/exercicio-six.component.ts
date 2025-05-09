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
