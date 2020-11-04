import { CartTableRow } from '../models/table-map/cart-table.model';
import { CartItem } from '../models/table-map/cart.model';
import { ProductService } from '../service/product-service';

export class AppUtility {

  static getRowNumber(pageOffset: number, pageLimit: number): number {
    return (pageOffset - 1) * pageLimit;
  }

  public static async convertCartTableRowToCartItem(cartTableRow: CartTableRow, productService: ProductService): Promise<CartItem> {
    const product = await productService.getProductById(cartTableRow.productId);
    const cartItem = new CartItem({ id: cartTableRow.id, product, quantity: cartTableRow.quantity, createdAt: cartTableRow.createdAt, updatedAt: cartTableRow.updatedAt });
    return cartItem;
  }

  public static convertCartTableRowsToCartItems(cartTableRows: CartTableRow[], productService: ProductService): Promise<CartItem[]> {
    return Promise.all(cartTableRows.map(async (cartTableRow) => {
      const cartItem = await this.convertCartTableRowToCartItem(cartTableRow, productService);
      return cartItem;
    }));
  }

}