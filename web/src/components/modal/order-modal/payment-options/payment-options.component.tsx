import React from 'react';
import { PaymentOption } from './payment-option/payment-option.component';

export const PaymentOptionsComponent: React.FC = () => {
  const paymentOptions = [
    { type: 'Cash on Delivery', isDisabled: false },
    { type: 'Debit Card', isDisabled: true },
    { type: 'Credit Card', isDisabled: true },
    { type: 'UPI Payment', isDisabled: true },
  ];

  return (
    <>
      <div>Note: Currently, we support only Cash on Delivery payment</div>
      <br/>
      <div className='row'>
        {paymentOptions.map(({ type, isDisabled }) => (
          <div className='col-4 p-3'>
            <PaymentOption type={type} isDisabled={isDisabled} />
          </div>
        ))}
      </div>
    </>
  );
};
