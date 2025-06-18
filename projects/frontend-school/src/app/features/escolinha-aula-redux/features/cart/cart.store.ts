import { Injectable, signal } from '@angular/core';
import { CartProduct, MOCK_CART_PRODUCTS } from './cart-mock-data';

export interface CartItem extends CartProduct {}

@Injectable({ providedIn: 'root' })
export class CartStore {
  private readonly catalogSignal = signal<CartProduct[]>([...MOCK_CART_PRODUCTS]);
  private readonly cartSignal = signal<CartItem[]>([]);

  readonly catalog = this.catalogSignal.asReadonly();
  readonly cart = this.cartSignal.asReadonly();

  addToCart(productId: number) {
    const catalog = this.catalogSignal();
    const cart = this.cartSignal();
    const product = catalog.find((p) => p.id === productId);
    if (!product) return;
    const existing = cart.find((p) => p.id === productId);
    if (existing) {
      this.cartSignal.set(cart.map((p) => (p.id === productId ? { ...p, quantity: p.quantity + 1 } : p)));
    } else {
      this.cartSignal.set([...cart, { ...product }]);
    }
  }

  removeFromCart(productId: number) {
    const cart = this.cartSignal();
    this.cartSignal.set(cart.filter((p) => p.id !== productId));
  }

  updateQuantity(productId: number, quantity: number) {
    const cart = this.cartSignal();
    this.cartSignal.set(cart.map((p) => (p.id === productId ? { ...p, quantity } : p)));
  }

  clearCart() {
    this.cartSignal.set([]);
  }
}
