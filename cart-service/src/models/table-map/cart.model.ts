import { Product } from './product.model';

export class CartItem {
  id: number;
  product: Product;
  quantity: number;
  createdAt: string;
  updatedAt: string;

  constructor({ id, product, quantity, createdAt, updatedAt }: CartItem) {
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}