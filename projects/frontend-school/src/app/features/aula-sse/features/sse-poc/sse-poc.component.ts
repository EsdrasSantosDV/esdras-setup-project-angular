import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MetricsService, ServerMetrics } from '../../../../core/services/metrics-service';
import { CoreModule } from 'keycloak-angular';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'esdras-khan-sse-poc',
  standalone: true,
  imports: [CoreModule, AsyncPipe],
  templateUrl: './sse-poc.component.html',
  styleUrl: './sse-poc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SsePocComponent {
  private metrics = inject(MetricsService);
  metrics$: Observable<ServerMetrics> = this.metrics.metrics$;

  start() {
    this.metrics.start();
  }
  stop() {
    this.metrics.stop();
  }
}
