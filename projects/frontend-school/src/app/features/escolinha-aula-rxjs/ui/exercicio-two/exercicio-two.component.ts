import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'esdras-khan-exercicio-two',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-two.component.html',
  styleUrl: './exercicio-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
//Declare um formulário com um FormControl e se inscreva nas mudanças de valor usando o valueChanges.
// Exiba um log no console toda vez que o valor for atualizado.
export default class ExercicioTwoComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit() {
    this.formGroup.valueChanges.subscribe((value) => {
      console.log('Novo valor:', value.name);
    });
  }
}
