import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router';
import { searchTermVar } from '../../../apollo/reactive-variables/search-term';

export const SearchBar: React.FC = () => {
  const baseNavUrl = '/products?search=:searchTerm';

  const history = useHistory();

  const searchTerm = useReactiveVar(searchTermVar);

  const generateLink = (): string => {
    return baseNavUrl.replace(':searchTerm', searchTerm);
  };

  const searchProducts = (event: any): void => {
    event.preventDefault();
    if (searchTerm) {
      history.push(generateLink());
    }
  };

  return (
    <form>
      <div className='form-group'>
        <div className='input-group'>
          <input
            type='search'
            className='form-control border-light box-shadow-none'
            placeholder='Search...'
            value={searchTerm}
            onChange={({ target: { value } }) => searchTermVar(value)}
            onKeyDown={(event) =>
              event.key === 'Enter' && searchProducts(event)
            }
          />
          <div className='input-group-append'>
            <button
              type='button'
              className='btn box-shadow-none product__search'
              onClick={searchProducts}
            >
              <i className='fas fa-search' />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
