import React, { useEffect, useState } from 'react';
import {
  CartItem,
  GetCartItemsDocument,
  useDeleteCartItemMutation,
  useUpdateCartItemMutation
} from '../../../../graphql-schema/graphql-schema';

interface CartItemProps {
  cartItem: CartItem;
}

export const CartItemComponent: React.FC<CartItemProps> = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const [quantityInput, setQuantityInput] = useState(cartItem.quantity);

  const [updateCartItem] = useUpdateCartItemMutation();
  const [deleteCartItem] = useDeleteCartItemMutation({
    refetchQueries: [{ query: GetCartItemsDocument }],
  });

  const increaseQuantity = () =>
    setQuantity((quantity) => {
      const updatedQuantity = ++quantity;
      setQuantityInput(updatedQuantity);
      return updatedQuantity;
    });
  const decreaseQuantity = () =>
    setQuantity((quantity) => {
      const updatedQuantity = --quantity;
      setQuantityInput(updatedQuantity);
      return updatedQuantity;
    });

  const updateQuantityInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityInput(+value);
  };

  const updateCartQuantity = () => {
    setQuantity(+quantityInput);
  };

  useEffect(() => {
    if (quantity !== cartItem.quantity) {
    if (quantity == 0) {
      deleteCartItem({ variables: { id: cartItem.id } });
    } else {
      updateCartItem({ variables: { id: cartItem.id, quantity } });
    }
    }
  }, [quantity]);

  return (
    <div className='d-flex w-100'>
      <div className='w-25 m-3'>
        <img
          src={cartItem.product.imageUrl}
          className='rounded img-thumbnail'
        />
      </div>
      <div className='w-75'>
        <div className='d-flex w-100 justify-content-between'>
          <a href='#'>
            <h5 className='mb-1'>{cartItem.product.name}</h5>
          </a>
          <small>3 days ago</small>
        </div>
        <p className='mb-1'>{cartItem.product.description}</p>
        <div>
          <button
            className='btn quantity-button m-1'
            onClick={decreaseQuantity}
          >
            <i className='fas fa-minus'></i>
          </button>
          <input
            className='m-2 quantity'
            value={quantityInput}
            onChange={updateQuantityInput}
            onBlur={updateCartQuantity}
            onKeyPress={({ key }) => key === 'Enter' && updateCartQuantity()}
          ></input>
          <button
            className='btn quantity-button m-1'
            onClick={increaseQuantity}
          >
            <i className='fas fa-plus'></i>
          </button>
        </div>
      </div>
    </div>
  );
};
