import { useReactiveVar } from '@apollo/client';
import React, { useEffect } from 'react';
import { RouteProps, useLocation } from 'react-router';
import { searchTermVar } from '../../apollo/reactive-variables/search-term';
import { sortByVar } from '../../apollo/reactive-variables/sort-by';
import { useGetProductsQuery } from '../../graphql-schema/graphql-schema';
import { Loader } from '../loader/loader.component';
import { SortByComponent } from '../sort-by/sort-by.component';
import { ProductComponent } from './product/product.component';
import './products.css';

export const Products: React.FC<RouteProps> = () => {
  const { search } = useLocation();
  const { sortBy, sortOrder } = useReactiveVar(sortByVar);
  const queryParams = new URLSearchParams(search);

  const category = queryParams.get('category');
  const subCategory = queryParams.get('sub-category');
  const searchTerm = queryParams.get('search');

  const { data, loading, error } = useGetProductsQuery({
    variables: {
      productInput: {
        category: category ? category : '',
        subCategory: subCategory ? subCategory : '',
        searchTerm: searchTerm ? searchTerm : '',
        pageOffset: 1,
        pageLimit: 10,
        sortBy,
        sortOrder,
      },
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    return () => {
      searchTermVar('');
    };
  }, []);

  if (loading) {
    return <Loader />;
  } else if (!data?.getProducts?.products || error) {
    return <div>Error</div>;
  }

  return (
    <main className='row'>
      {/* Category Products */}
      <div className='col-12'>
        <div className='row'>
          <div className='col-12 py-3'>
            <div className='row'>
              <div className='col-12'>
                <SortByComponent />
              </div>
            </div>
            <div className='row'>
              {/* Products */}
              {data.getProducts.products?.length > 0 &&
                data.getProducts.products.map(
                  (product) =>
                    product && (
                      <ProductComponent key={product.id} product={product} />
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
