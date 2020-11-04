import { useReactiveVar } from '@apollo/client';
import React, { useState } from 'react';
import { cartItemsVar } from '../../../apollo/reactive-variables/cart-items';
import { userInfoVar } from '../../../apollo/reactive-variables/user-info';
import {
  GetCartItemsDocument,
  Product,
  useAddCartItemMutation
} from '../../../graphql-schema/graphql-schema';
import { ProductDetailModal } from '../../modal/product-detail-modal/product-detail-modal.component';

interface ProductProp {
  product: Product;
}

export const ProductComponent: React.FC<ProductProp> = ({ product }) => {
  const { id: userId } = useReactiveVar(userInfoVar);
  const [addCartItem] = useAddCartItemMutation({
    refetchQueries: [{ query: GetCartItemsDocument }],
    onError: () => {
      alert('Error adding to the Cart');
    },
  });

  const addToCart = (productId: number) => {
    if (userId) {
      addCartItem({ variables: { productId } });
    } else {
      alert('Please Login/Register to place the order');
    }
  };

  const cartItems = useReactiveVar(cartItemsVar);

  const isAddedToCart =
    cartItems?.findIndex((cartItem) => cartItem.product.id === product.id) >= 0
      ? true
      : false;

  const [isProductDetailOpen, openProductDetail] = useState(false);

  return (
    <>
      <div
        key={product.id}
        className='col-xl-3 col-lg-3 col-sm-6 my-3 cursor-pointer'
        onClick={() => openProductDetail(true)}
      >
        <div className='col-12 bg-white text-center h-100 product-item'>
          <div className='row h-100'>
            <div className='col-12 p-0 mb-3'>
              <img src={product.imageUrl} className='img-fluid product-image' />
            </div>
            <div className='col-12 mb-3'>{product.name}</div>
            <div className='col-12 mb-3'>
              {product.discountPercentage > 0 && (
                <span className='product-price-old'>Rs. {product.price}</span>
              )}
              <br />
              <span className='product-price'>
                Rs.{' '}
                {product.discountPercentage > 0
                  ? product.offerPrice
                  : product.price}
              </span>
            </div>
            <div className='col-12 mb-3 align-self-end'>
              {!isAddedToCart && (
                <button
                  className='btn btn-info'
                  type='button'
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product.id);
                  }}
                >
                  <i className='fas fa-cart-plus mr-2' />
                  Add to cart
                </button>
              )}
              {isAddedToCart && (
                <button
                  className='btn btn-warning'
                  type='button'
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className='fas fa-cart-plus mr-2' />
                  Added to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isProductDetailOpen && (
        <ProductDetailModal
          openProductDetail={openProductDetail}
          product={product}
          isAddedToCart={isAddedToCart}
          addToCart={addToCart}
        />
      )}
    </>
  );
};
