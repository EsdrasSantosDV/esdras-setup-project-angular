import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStore } from './cart.store';
import { CartProduct } from './cart-mock-data';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  catalog;
  cart;

  constructor(private cartStore: CartStore) {
    this.catalog = this.cartStore.catalog;
    this.cart = this.cartStore.cart;
  }

  addToCart(productId: number) {
    this.cartStore.addToCart(productId);
  }

  removeFromCart(productId: number) {
    this.cartStore.removeFromCart(productId);
  }

  updateQuantity(productId: number, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const quantity = Number(value);
    if (quantity > 0) {
      this.cartStore.updateQuantity(productId, quantity);
    }
  }

  clearCart() {
    this.cartStore.clearCart();
  }

  get total() {
    const items = this.cart();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
