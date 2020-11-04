import React, { useState } from 'react';
import {
  GetCartItemsDocument,
  usePlaceOrderMutation
} from '../../../graphql-schema/graphql-schema';
import { AddAddressModal } from './address-list/add-address-modal/add-address-modal.component';
import { AddressListComponent } from './address-list/address-list.component';
import './order-modal.css';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';

export const OrderModal: React.FC = () => {
  const [placeOrder] = usePlaceOrderMutation({
    onError: () => {
      alert('Internal Server Error');
    },
  });

  const [{ deliveryAddressId, paymentTypeId }, setOrderState] = useState({
    deliveryAddressId: 0,
    paymentTypeId: 1,
  });

  const [isClosed, close] = useState(true);

  const validateAndPlaceOrder = () => {
    if (deliveryAddressId && paymentTypeId) {
    placeOrder({
      variables: { deliveryAddressId, paymentTypeId },
      refetchQueries: [{ query: GetCartItemsDocument }],
    });
    } else {
    alert('Invalid Delivery Address');
    }
  };

  return (
    <div
      className='modal fade bd-example-modal-lg'
      id='orderModal'
      tabIndex={-1}
      role='dialog'
      aria-labelledby='orderModal'
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
              Order Details
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
                    {/* Content */}
                    <div className='accordion' id='accordionExample'>
                      <div className='card'>
                        <div className='card-header' id='headingOne'>
                          <h2 className='mb-0'>
                            <button
                              className='accordion-btn btn btn-link'
                              type='button'
                              data-toggle='collapse'
                              data-target='#collapseOne'
                              aria-expanded='true'
                              aria-controls='collapseOne'
                            >
                              Select Delivery Address
                            </button>
                          </h2>
                        </div>
                        <div
                          id='collapseOne'
                          className='collapse show'
                          aria-labelledby='headingOne'
                          data-parent='#accordionExample'
                        >
                          <div className='card-body'>
                            <div>
                              <button
                                type='button'
                                className='btn btn-primary'
                                // data-target='#addAddressModal'
                                // data-toggle='modal'
                                onClick={() => close(false)}
                              >
                                Add Address
                              </button>
                            </div>
                            <br />
                            <AddressListComponent
                              setOrderState={setOrderState}
                            />

                            {!isClosed && <AddAddressModal close={close} />}
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <div className='card-header' id='headingTwo'>
                          <h2 className='mb-0'>
                            <button
                              className='accordion-btn btn btn-link collapsed'
                              type='button'
                              data-toggle='collapse'
                              data-target='#collapseTwo'
                              aria-expanded='false'
                              aria-controls='collapseTwo'
                            >
                              Select Payment Option
                            </button>
                          </h2>
                        </div>
                        <div
                          id='collapseTwo'
                          className='collapse'
                          aria-labelledby='headingTwo'
                          data-parent='#accordionExample'
                        >
                          <div className='card-body'>
                            <PaymentOptionsComponent />
                          </div>
                        </div>
                      </div>
                    </div>
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
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-primary'
              data-dismiss='modal'
              onClick={validateAndPlaceOrder}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
