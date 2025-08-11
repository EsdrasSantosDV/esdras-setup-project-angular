import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map, merge, Observable, scan, startWith } from 'rxjs';
import { MetricsService, ServerMetrics } from '../../../../core/services/metrics-service';
import { CoreModule } from 'keycloak-angular';
import { AsyncPipe, CommonModule } from '@angular/common';
import { OrdersApiService, Order, OrderStatus } from '../../../../core/services/pedidos.service';
import { SseService } from '../../../../core/sse/sse.service';

@Component({
  selector: 'esdras-khan-sse-poc',
  standalone: true,
  imports: [CoreModule, CommonModule, AsyncPipe],
  templateUrl: './sse-poc.component.html',
  styleUrl: './sse-poc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SsePocComponent {
  private readonly api = inject(OrdersApiService);
  private readonly sse = inject(SseService);

  // GET inicial
  private readonly bootstrap$ = this.api.listar().pipe(map((inicial) => (_: Order[]) => inicial));

  // Patch de status vindo do SSE (canal/tipo filtrados aqui no componente)
  private readonly statusAlterado$ = this.sse
    .on<{ pedidoId: string; status: OrderStatus }>('pedidos', 'status-alterado')
    .pipe(
      map(
        ({ pedidoId, status }) =>
          (estado: Order[]) =>
            estado.map((p) => (p.id === pedidoId ? { ...p, status } : p)),
      ),
    );

  // Patch de novo pedido vindo do SSE (canal/tipo filtrados aqui no componente)
  private readonly pedidoCriado$ = this.sse.on<{ pedido: Order }>('pedidos', 'pedido-criado').pipe(
    map(({ pedido }) => (estado: Order[]) =>
      // insere no topo
      [pedido, ...estado],
    ),
  );

  // Estado "vivo": lista inicial + patches
  // Estado "vivo": lista inicial + patches
  readonly pedidos$ = merge(this.bootstrap$, this.statusAlterado$, this.pedidoCriado$).pipe(
    startWith((s: Order[]) => s ?? []),
    scan((acc, fn) => fn(acc), [] as Order[]),
  );

  ngOnInit(): void {
    // Mantém seu SSE exatamente como está — só abrimos aqui
    this.sse.connect();
  }

  rastrearPorId = (_: number, p: Order) => p.id;

  classeStatus(status: OrderStatus) {
    switch (status) {
      case 'RECEBIDO':
        return 'chip recebido';
      case 'PREPARANDO':
        return 'chip preparando';
      case 'PRONTO':
        return 'chip pronto';
      case 'ENTREGUE':
        return 'chip entregue';
      default:
        return 'chip';
    }
  }
}
