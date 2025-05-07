import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-six',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercicio-six.component.html',
  styleUrl: './exercicio-six.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioSixComponent implements OnInit, OnDestroy {
  inputControl = new FormControl('');
  private value: Subscription = new Subscription();

  ngOnInit() {
    this.value = this.inputControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((value) => {
      console.log('Valor diferente emitido:', value);
    });
  }

  ngOnDestroy() {
    if (this.value) {
      this.value.unsubscribe();
    }
  }
}
