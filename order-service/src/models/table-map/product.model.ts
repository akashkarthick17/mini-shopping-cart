export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  subCategory: string;
  features: string;
  discountPercentage: number;
  offerPrice: number;
  imageUrl: string;
  brand: string;
  warehouseId: number;
  stockCount: number;
  createdAt: string;
}