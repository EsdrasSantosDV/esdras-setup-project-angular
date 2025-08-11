// src/app/core/modelos/order.model.ts
export type OrderStatus = 'RECEBIDO' | 'PREPARANDO' | 'PRONTO' | 'ENTREGUE';

export interface OrderItem {
  dish: string;
  qty: number;
}

export interface Order {
  id: string;
  customer: string;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: string; // ISO
}

// src/app/core/servicos/orders-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrdersApiService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listar(): Observable<Order[]> {
    // Se o backend estiver em PT-BR, esse map vira "no-op"
    return this.http.get<any[]>(`${this.baseUrl}/pedidos`).pipe(
      map((lista) =>
        lista.map((p) => ({
          id: p.id,
          customer: p.customer ?? p.cliente,
          items: (p.items ?? p.itens).map((it: any) => ({
            dish: it.dish ?? it.prato,
            qty: it.qty ?? it.quantidade,
          })),
          status: p.status as OrderStatus,
          createdAt: p.createdAt ?? p.criadoEm,
        })),
      ),
    );
  }
}
