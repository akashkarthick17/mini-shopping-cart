import { RouteProps } from 'react-router';
import { Home } from '../../components/home/home.component';
import { ProductDetail } from '../../components/product-detail/product-detail.component';
import { Products } from '../../components/products/products.component';

export const UnauthenticatedRoutes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/products',
    component: Products,
    exact: true,
  },
  {
    path: '/product',
    component: ProductDetail,
    exact: true,
  },
];