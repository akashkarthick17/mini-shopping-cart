import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { userInfoVar } from '../../apollo/reactive-variables/user-info';
import { useGetCartItemsQuery } from '../../graphql-schema/graphql-schema';
import { CartModal } from '../modal/cart-modal/cart-modal.component';
import { LoginModal } from '../modal/login-modal/login-modal.component';
import { RegisterModal } from '../modal/register-modal/register-modal.component';
import './header.css';
import { Navigation } from './navigation/navigation.component';
import { SearchBar } from './search-bar/search-bar.component';

export const Header: React.FC = () => {
  const userInfo = useReactiveVar(userInfoVar);

  const { data } = useGetCartItemsQuery({
    fetchPolicy: 'cache-first',
  });

  const onLogout = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    userInfoVar({});
  };

  const cartItems = data?.getCartItems?.cartItems;

  const cartQuantity = cartItems?.length;

  return (
    <header className='row'>
      {/* Header */}
      <div className='col-12'>
        <div className='row main-header'>
          <div className='col-lg-auto'>
            <div className='site-logo text-center text-lg-left'>
              <Link to='/'>
                <i className='fas fa-shopping-cart'></i>
                <span className='site-name'>E-Cart</span>
              </Link>
            </div>
          </div>

          <div className='col-lg-5 mx-auto mt-4 mt-lg-0'>
            <SearchBar />
          </div>

          <div className='col-lg-auto text-center text-lg-left header-item-holder'>
            {Boolean(userInfo.id) && (
              <>
                <a
                  href='#'
                  className='header-item'
                  data-toggle='modal'
                  data-target='#cartModal'
                >
                  <span className='mr-2'>Cart</span>
                  <span className='cart-icon'>
                    <i className='fas fa-shopping-cart mr-2'></i>
                    {cartQuantity && cartQuantity > 0 ? (
                      <span className='cart-quantity'>{cartQuantity}</span>
                    ) : null}
                  </span>
                </a>
                <a href='#' className='header-item' onClick={onLogout}>
                  <span className='mr-2'>Logout</span>
                  <i className='fas fa-sign-out-alt mr-2'></i>
                </a>
              </>
            )}

            {!Boolean(userInfo.id) && (
              <>
                <a
                  href='#'
                  className='header-item'
                  data-toggle='modal'
                  data-target='#loginModal'
                >
                  <span className='mr-2'>Login</span>
                  <i className='fas fa-sign-in-alt mr-2'></i>
                </a>
                <a
                  href='#'
                  className='header-item'
                  data-toggle='modal'
                  data-target='#registerModal'
                >
                  <span className='mr-2'>Register</span>
                  <i className='fas fa-user-edit mr-2'></i>
                </a>
              </>
            )}
          </div>
        </div>

        {/* Nav */}
        <div className='row'>
          <Navigation />
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal />

      {/* Register Modal */}
      <RegisterModal />

      {/* Cart Modal */}
      <CartModal />
    </header>
  );
};
