import { ProductQueryParams } from '../models/request/product-request.model';
import { CartItem } from '../models/table-map/cart.model';
import { Product } from '../models/table-map/product.model';

export class AppUtility {

  public static getRowNumber(pageOffset: number, pageLimit: number): number {
    return (pageOffset - 1) * pageLimit;
  }

  public static isValidProductQueryParams(productQueryParams: ProductQueryParams) {
    const { category, sub_category, search_term } = productQueryParams;
    if (category || sub_category || search_term) {
      return true;
    }
    return false;
  }

  public static calculateOfferPriceOfProduct(product: Product): Product {
    if (product.discountPercentage > 0) {
      product.offerPrice = product.price - Math.ceil((product.price * (product.discountPercentage / 100)));
    } else {
      product.offerPrice = product.price;
    }
    return product;
  }

  public static calculateOfferPriceOfProducts(products: Product[]): Product[] {
    return products.map(product => this.calculateOfferPriceOfProduct(product));
  }

  public static mapCartItems(products: Product[], cartItems: CartItem[]): Product[] {
    return products.map(product => {
      const index = cartItems?.findIndex(cartItem => cartItem.product.id === product.id);
      if (index !== undefined && index !== null && index >= 0) {
        product.isAddedToCart = true;
      } else {
        product.isAddedToCart = false;
      }
      return product;
    })
  }
}