import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CartComponent } from '../../../features/escolinha-aula-redux/features/cart/cart.component';

@Component({
  selector: 'esdras-khan-page-not-found',
  standalone: true,
  imports: [MatTabsModule, CartComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
