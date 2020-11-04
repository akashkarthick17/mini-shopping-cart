import React from 'react';
import { Product } from '../../../graphql-schema/graphql-schema';
import './product-detail-modal.component.css';

interface ProductDetailModalProps {
  openProductDetail: (isProductDetailOpen: boolean) => void;
  product: Product;
  isAddedToCart: boolean;
  addToCart: (id: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  openProductDetail,
  product,
  isAddedToCart,
  addToCart,
}) => {
  return (
    <div
      className='modal bd-example-modal-lg'
      id='productDetailModal'
      tabIndex={-1}
      role='dialog'
      aria-labelledby='productDetailModal'
    >
      <div
        className='modal-dialog modal-lg modal-dialog-centered'
        role='document'
      >
        {/* Modal Content */}
        <div className='modal-content'>
          {/* Modal Header */}
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>
              Product Detail
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={() => openProductDetail(false)}
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className='modal-body'>
            <div
              key={product.id}
              className='my-3'
              onClick={() => openProductDetail(true)}
            >
              <div className='col-12 bg-white text-center h-100'>
                <div className='row h-100'>
                  <div className='col-5'>
                    <div className='col-12 p-0 mb-3'>
                      <img
                        src={product.imageUrl}
                        className='img-fluid product-image'
                      />
                    </div>
                  </div>

                  <div className='col-7 text-align-left'>
                    <h3 className='col-12 mb-3'>{product.name}</h3>
                    <div className='col-12 mb-3'>{product.features}</div>
                    <div className='col-12 mb-3'>
                      {product.discountPercentage > 0 && (
                        <span className='product-price-old'>
                          Rs. {product.price}
                        </span>
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
                          onClick={() => addToCart(product.id)}
                        >
                          <i className='fas fa-cart-plus mr-2' />
                          Add to cart
                        </button>
                      )}
                      {isAddedToCart && (
                        <button className='btn btn-warning' type='button'>
                          <i className='fas fa-cart-plus mr-2' />
                          Added to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
