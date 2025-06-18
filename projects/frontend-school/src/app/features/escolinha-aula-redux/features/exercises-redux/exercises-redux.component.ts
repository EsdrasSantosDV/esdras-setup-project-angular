import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'esdras-khan-exercises-redux',
  standalone: true,
  imports: [MatTabsModule, CartComponent],
  templateUrl: './exercises-redux.component.html',
  styleUrl: './exercises-redux.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesReduxComponent {}
