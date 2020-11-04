import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  
  const baseNavUrl = '/products?category=:category&sub-category=:subCategory';

  const generateLink = (category: string, subCategory: string): string => {
    return baseNavUrl
      .replace(':category', category)
      .replace(':subCategory', subCategory);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white col-12'>
      <button
        className='navbar-toggler d-lg-none border-0'
        type='button'
        data-toggle='collapse'
        data-target='#mainNav'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='mainNav'>
        <ul className='navbar-nav mx-auto mt-2 mt-lg-0'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <Link
              className='nav-link dropdown-toggle'
              to='#'
              id='electronics'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Electronics
            </Link>
            <div className='dropdown-menu' aria-labelledby='electronics'>
              <Link
                className='dropdown-item'
                to={generateLink('electronics', 'computer')}
              >
                Computers
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('electronics', 'mobile')}
              >
                Mobile Phones
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('electronics', 'television')}
              >
                Television Sets
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('electronics', 'camera')}
              >
                DSLR Cameras
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('electronics', 'projector')}
              >
                Projectors
              </Link>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <Link
              className='nav-link dropdown-toggle'
              to='#'
              id='fashion'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Fashion
            </Link>
            <div className='dropdown-menu' aria-labelledby='fashion'>
              <Link
                className='dropdown-item'
                to={generateLink('fashion', 'men')}
              >
                Men's
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('fashion', 'women')}
              >
                Women's
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('fashion', 'children')}
              >
                Children's
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('fashion', 'accessories')}
              >
                Accessories
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('fashion', 'footwear')}
              >
                Footwear
              </Link>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <Link
              className='nav-link dropdown-toggle'
              to='#'
              id='books'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Books
            </Link>
            <div className='dropdown-menu' aria-labelledby='books'>
              <Link
                className='dropdown-item'
                to={generateLink('books', 'adventure')}
              >
                Adventure
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('books', 'horror')}
              >
                Horror
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('books', 'romantic')}
              >
                Romantic
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('books', 'children')}
              >
                Children's
              </Link>
              <Link
                className='dropdown-item'
                to={generateLink('books', 'non-fiction')}
              >
                Non-Fiction
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
