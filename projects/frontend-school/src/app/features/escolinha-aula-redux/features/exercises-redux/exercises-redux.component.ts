import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'esdras-khan-exercises-redux',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './exercises-redux.component.html',
  styleUrl: './exercises-redux.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesReduxComponent {}
