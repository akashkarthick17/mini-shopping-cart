import React from 'react';
import './payment-option.component.css';

interface PaymentOptionProps {
  type: string;
  isDisabled: boolean;
}

export const PaymentOption: React.FC<PaymentOptionProps> = ({
  type,
  isDisabled,
}) => {
  return (
    <div
      className={`card payment-option__container 
      ${!isDisabled ? 'selected' : ''}   
      ${isDisabled ? 'disabled' : ''}
        `}
      tabIndex={0}
    >
      <div className='card-body'>
        <h5 className='card-title'>{type}</h5>
      </div>
    </div>
  );
};
