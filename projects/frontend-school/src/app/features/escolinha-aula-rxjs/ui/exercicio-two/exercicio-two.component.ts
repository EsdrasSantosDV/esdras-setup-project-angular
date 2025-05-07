import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'esdras-khan-exercicio-two',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercicio-two.component.html',
  styleUrl: './exercicio-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTwoComponent implements OnInit, OnDestroy {
  input = new FormControl('');
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.input.valueChanges.subscribe((value) => {
      console.log('Valor atualizado:', value);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
