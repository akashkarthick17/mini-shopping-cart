import React from 'react';
import { sortByVar } from '../../apollo/reactive-variables/sort-by';
import { SortBy, SortOrder } from '../../graphql-schema/graphql-schema';

export const SortByComponent = () => {
  const onSort = (event: any, sortBy: SortBy, sortOrder: SortOrder) => {
    event.preventDefault();
    sortByVar({ sortBy, sortOrder });
  };

  return (
    <div className='dropdown'>
      <button
        className='btn btn-primary dropdown-toggle'
        type='button'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Sort By
      </button>
      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        <a
          className='dropdown-item'
          href='#'
          onClick={(event) => {
            onSort(event, SortBy.Price, SortOrder.Asc);
          }}
        >
          Price - Low to High
        </a>
        <a
          className='dropdown-item'
          href='#'
          onClick={(event) => {
            onSort(event, SortBy.Price, SortOrder.Desc);
          }}
        >
          Price - High to Low
        </a>
      </div>
    </div>
  );
};
