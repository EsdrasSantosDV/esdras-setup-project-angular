export interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const MOCK_CART_PRODUCTS: CartProduct[] = [
  { id: 1, name: 'Notebook', price: 3500, quantity: 1 },
  { id: 2, name: 'Mouse', price: 150, quantity: 2 },
  { id: 3, name: 'Teclado', price: 250, quantity: 1 },
];
