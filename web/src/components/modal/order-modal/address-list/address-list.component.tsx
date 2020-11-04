import React, { useEffect, useState } from 'react';
import {
  Address,
  useGetAddressListQuery
} from '../../../../graphql-schema/graphql-schema';
import { Loader } from '../../../loader/loader.component';
import { AddressComponent } from './address/address.component';

export interface AddressState extends Address {
  isSelected: boolean;
}

export interface AddressListState {
  addressList: AddressState[];
}

interface AddressListComponentProps {
  setOrderState: (state: any) => void;
}

export const AddressListComponent: React.FC<AddressListComponentProps> = ({
  setOrderState,
}) => {
  const { data, loading } = useGetAddressListQuery();

  const addressList = data?.getAddressList?.addressList as Address[];

  const [addressListState, setAddressListState] = useState<AddressListState>({
    addressList: [],
  });

  useEffect(() => {
    if (!loading && data?.getAddressList?.addressList) {
      setAddressListState({
        addressList: addressList.map((address, index) => {
          const state = {
            ...address,
            isSelected: false,
            ...(index === 0 && { isSelected: true }),
          };
          return state;
        }),
      });

      if (addressList.length > 0) {
        setOrderState((orderState: any) => {
          return {
            ...orderState,
            deliveryAddressId: addressList[0].id,
          };
        });
      }
    }
  }, [loading, data]);

  const selectAddress = (id: number) => {
    setAddressListState((state) => {
      return {
        addressList: state.addressList.map((address) => {
          if (address.id === id) {
            address.isSelected = true;
          } else {
            address.isSelected = false;
          }
          return address;
        }),
      };
    });

    setOrderState((orderState: any) => {
      return {
        ...orderState,
        deliveryAddressId: id,
      };
    });
  };

  return loading || !Boolean(addressListState?.addressList) ? (
    <Loader />
  ) : (
    <div className='row'>
      {addressListState.addressList.map(
        (address: AddressState, index: number) => (
          <div className='col-4 p-3' key={address.id}>
            <AddressComponent
              address={address}
              index={index}
              selectAddress={selectAddress}
            />
          </div>
        )
      )}
    </div>
  );
};
