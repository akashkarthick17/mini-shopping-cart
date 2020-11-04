import React from 'react';
import { AddressState } from '../address-list.component';
import './address.component.css';

interface AddressComponentProps {
  address: AddressState;
  index: number;
  selectAddress: (id: number) => void;
}

export const AddressComponent: React.FC<AddressComponentProps> = ({
  address,
  index,
  selectAddress,
}) => {
  return (
    <div
      className={`card address__container ${
        address.isSelected ? 'selected' : ''
      }`}
      tabIndex={0}
      onClick={() => selectAddress(address.id)}
    >
      <div className='card-body'>
        <h5 className='card-title'>Address {index + 1}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          {address.city} - {address.pinCode}
        </h6>
        <p className='card-text'>
          {address.address1}
          <br />
          {address.address2}
        </p>
        <a href='#' className='card-link'>
          Edit
        </a>
      </div>
    </div>
  );
};
