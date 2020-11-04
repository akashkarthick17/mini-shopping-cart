import React from 'react';

export const SimilarProducts = () => {
  return (
    <div className='col-12'>
      <div className='row'>
        <div className='col-12 py-3'>
          <div className='row'>
            <div className='col-12 text-center text-uppercase'>
              <h2>Similar Products</h2>
            </div>
          </div>
          <div className='row'>
            {/* Product */}
            <div className='col-lg-3 col-sm-6 my-3'>
              <div className='col-12 bg-white text-center h-100 product-item'>
                <div className='row h-100'>
                  <div className='col-12 p-0 mb-3'>
                    <a href='/product'>
                      <img src='images/image-1.jpg' className='img-fluid' />
                    </a>
                  </div>
                  <div className='col-12 mb-3'>
                    <a href='/product' className='product-name'>
                      Sony Alpha DSLR Camera
                    </a>
                  </div>
                  <div className='col-12 mb-3'>
                    <span className='product-price-old'>$500</span>
                    <br />
                    <span className='product-price'>$500</span>
                  </div>
                  <div className='col-12 mb-3 align-self-end'>
                    <button className='btn btn-outline-dark' type='button'>
                      <i className='fas fa-cart-plus mr-2' />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product */}
            {/* Product */}
            <div className='col-lg-3 col-sm-6 my-3'>
              <div className='col-12 bg-white text-center h-100 product-item'>
                <div className='row h-100'>
                  <div className='col-12 p-0 mb-3'>
                    <a href='/product'>
                      <img src='images/image-2.jpg' className='img-fluid' />
                    </a>
                  </div>
                  <div className='col-12 mb-3'>
                    <a href='/product' className='product-name'>
                      Optoma 4K HDR Projector
                    </a>
                  </div>
                  <div className='col-12 mb-3'>
                    <span className='product-price'>$1,500</span>
                  </div>
                  <div className='col-12 mb-3 align-self-end'>
                    <button className='btn btn-outline-dark' type='button'>
                      <i className='fas fa-cart-plus mr-2' />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product */}
            {/* Product */}
            <div className='col-lg-3 col-sm-6 my-3'>
              <div className='col-12 bg-white text-center h-100 product-item'>
                <div className='row h-100'>
                  <div className='col-12 p-0 mb-3'>
                    <a href='/product'>
                      <img src='images/image-3.jpg' className='img-fluid' />
                    </a>
                  </div>
                  <div className='col-12 mb-3'>
                    <a href='/product' className='product-name'>
                      HP Envy Specter 360
                    </a>
                  </div>
                  <div className='col-12 mb-3'>
                    <div className='product-price-old'>$2,800</div>
                    <span className='product-price'>$2,500</span>
                  </div>
                  <div className='col-12 mb-3 align-self-end'>
                    <button className='btn btn-outline-dark' type='button'>
                      <i className='fas fa-cart-plus mr-2' />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product */}
            {/* Product */}
            <div className='col-lg-3 col-sm-6 my-3'>
              <div className='col-12 bg-white text-center h-100 product-item'>
                <div className='row h-100'>
                  <div className='col-12 p-0 mb-3'>
                    <a href='/product'>
                      <img src='images/image-4.jpg' className='img-fluid' />
                    </a>
                  </div>
                  <div className='col-12 mb-3'>
                    <a href='/product' className='product-name'>
                      Dell Alienware Area 51
                    </a>
                  </div>
                  <div className='col-12 mb-3'>
                    <span className='product-price'>$4,500</span>
                  </div>
                  <div className='col-12 mb-3 align-self-end'>
                    <button className='btn btn-outline-dark' type='button'>
                      <i className='fas fa-cart-plus mr-2' />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product */}
          </div>
        </div>
      </div>
    </div>
  );
};
