import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'esdras-khan-exercicio-two',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './exercicio-two.component.html',
  styleUrl: './exercicio-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTwoComponent implements OnInit {
  name = new FormControl('');

  ngOnInit() {
    this.name.valueChanges.subscribe((value) => {
      console.log('Valor atualizado: ', value);
    });
  }
}
