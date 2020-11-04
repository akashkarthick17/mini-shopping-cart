import React from 'react';
import { cartItemsVar } from '../../../apollo/reactive-variables/cart-items';
import { userInfoVar } from '../../../apollo/reactive-variables/user-info';
import {
  CartItem,
  useGetCartItemsQuery
} from '../../../graphql-schema/graphql-schema';
import { Loader } from '../../loader/loader.component';
import { OrderModal } from '../order-modal/order-modal.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import './cart-modal.css';

export const CartModal: React.FC = () => {
  const { loading, data } = useGetCartItemsQuery({
    skip: !Boolean(userInfoVar().id),
    fetchPolicy: 'network-only',
  });

  const cartItems: CartItem[] = data?.getCartItems?.cartItems as CartItem[];

  cartItemsVar(cartItems);

  return (
    <>
      <div
        className='modal fade bd-example-modal-lg'
        id='cartModal'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='cartModal'
        aria-hidden='true'
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
                Cart Items
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className='modal-body'>
              <div className='col-12 mx-auto bg-white py-3 mb-4'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='list-group'>
                      {(() => {
                        if (loading || !Boolean(cartItems)) {
                          return <Loader />;
                        } else {
                          return cartItems.map((cartItem) => (
                            <div
                              key={cartItem.id}
                              className='list-group-item flex-column align-items-start'
                            >
                              <CartItemComponent
                                cartItem={cartItem as CartItem}
                              />
                            </div>
                          ));
                        }
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                disabled={cartItems?.length === 0}
                data-target='#orderModal'
                data-toggle='modal'
                data-dismiss='modal'
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal />
    </>
  );
};
