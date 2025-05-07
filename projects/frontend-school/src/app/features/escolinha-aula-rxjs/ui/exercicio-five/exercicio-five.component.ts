import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'esdras-khan-exercicio-five',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercicio-five.component.html',
  styleUrl: './exercicio-five.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioFiveComponent {
  searchControl = new FormControl('');

  searchValue = toSignal(this.searchControl.valueChanges.pipe(debounceTime(500)), { initialValue: '' });

  constructor() {
    computed(() => {
      console.log('Busca realizada:', this.searchValue());
    });
  }
}
