import React, { useState } from 'react';
import {
  AddressInput,
  GetAddressListDocument,
  useAddAddressMutation
} from '../../../../../graphql-schema/graphql-schema';
import './add-address-modal.component.css';

interface AddAddressModalProps {
  close: (isClosed: boolean) => void;
}

export const AddAddressModal: React.FC<AddAddressModalProps> = ({ close }) => {
  const [address, setAddress] = useState<AddressInput>({
    address1: '',
    address2: '',
    city: '',
    pinCode: '',
    landmark: '',
    gpsCoordinates: null,
  });

  const onAddress1Change = (address1: string): void => {
    setAddress((data) => {
      return { ...data, address1 };
    });
  };
  const onAddress2Change = (address2: string): void => {
    setAddress((data) => {
      return { ...data, address2 };
    });
  };

  const onCityChange = (city: string): void => {
    setAddress((data) => {
      return { ...data, city };
    });
  };
  const onPinCodeChange = (pinCode: string): void => {
    setAddress((data) => {
      return { ...data, pinCode };
    });
  };

  const onLandmarkChange = (landmark: string): void => {
    setAddress((data) => {
      return { ...data, landmark };
    });
  };

  const [addAddress] = useAddAddressMutation();

  const onAddAddress = () => {
    if (
      address.address1 &&
      address.city &&
      address.pinCode &&
      address.landmark
    ) {
      addAddress({
        variables: { addressInput: address },
        refetchQueries: [{ query: GetAddressListDocument }],
        awaitRefetchQueries: true,
      }).then(() => {
        close(true);
      });
    } else {
      alert('Please fill the required details');
    }
  };

  return (
    <div
      className='modal bd-example-modal-md'
      id='addAddressModal'
      tabIndex={-1}
      role='dialog'
      aria-labelledby='addAddressModal'
    >
      <div
        className='modal-dialog modal-md modal-dialog-centered'
        role='document'
      >
        {/* Modal Content */}
        <div className='modal-content'>
          {/* Modal Header */}
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>
              Address Form
            </h5>
            <button
              type='button'
              className='close'
              aria-label='Close'
              onClick={() => close(true)}
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className='modal-body'>
            <div className='col-12 mx-auto bg-white py-3'>
              <div className='row'>
                <div className='col-12'>
                  <form>
                    <div className='row'>
                      <div className='form-group col-12'>
                        <label htmlFor='address1'>*Address Line 1</label>
                        <input
                          type='text'
                          id='address1'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onAddress1Change(value)
                          }
                          required
                          autoComplete='true'
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='form-group col-12'>
                        <label htmlFor='address2'>Address Line 2</label>
                        <input
                          type='text'
                          id='address2'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onAddress2Change(value)
                          }
                          autoComplete='true'
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='form-group col-6'>
                        <label htmlFor='city'>*City</label>
                        <input
                          type='text'
                          id='city'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onCityChange(value)
                          }
                          required
                          autoComplete='true'
                        />
                      </div>

                      <div className='form-group col-6'>
                        <label htmlFor='pin-code'>*Pin Code</label>
                        <input
                          type='text'
                          id='pin-code'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onPinCodeChange(value)
                          }
                          required
                          autoComplete='true'
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='form-group col-12'>
                        <label htmlFor='landmark'>*Landmark</label>
                        <input
                          type='text'
                          id='landmark'
                          className='form-control'
                          onChange={({ target: { value } }) =>
                            onLandmarkChange(value)
                          }
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => close(true)}
            >
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => onAddAddress()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
