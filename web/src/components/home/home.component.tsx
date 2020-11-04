import React from 'react';
import './home.css';

export const Home: React.FC = () => {
  return (
    <main className='row'>
      {/* Slider */}
      <div className='col-12 px-0'>
        <div id='slider' className='carousel slide w-100' data-ride='carousel'>
          <ol className='carousel-indicators'>
            <li data-target='#slider' data-slide-to={0} className='active' />
            <li data-target='#slider' data-slide-to={1} />
            <li data-target='#slider' data-slide-to={2} />
          </ol>
          <div className='carousel-inner' role='listbox'>
            <div className='carousel-item active'>
              <img src='images/slider-1.jpg' className='slider-img' />
            </div>
            <div className='carousel-item'>
              <img src='images/slider-2.jpg' className='slider-img' />
            </div>
            <div className='carousel-item'>
              <img src='images/slider-3.jpg' className='slider-img' />
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#slider'
            role='button'
            data-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#slider'
            role='button'
            data-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
      {/* Slider */}

      {/* Featured Products */}
      <div className='col-12'>
        <div className='row'>
          <div className='col-12 py-3'>
            <div className='row'>
              <div className='col-12 text-center text-uppercase'>
                <h2>Featured Products</h2>
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
                      <button className='btn btn-outline-info' type='button'>
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
                      <button className='btn btn-outline-info' type='button'>
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
                      <button className='btn btn-outline-info' type='button'>
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
                      <button className='btn btn-outline-info' type='button'>
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
      {/* Featured Products */}

      <div className='col-12'>
        <hr />
      </div>

      {/* Latest Product */}
      <div className='col-12'>
        <div className='row'>
          <div className='col-12 py-3'>
            <div className='row'>
              <div className='col-12 text-center text-uppercase'>
                <h2>Latest Products</h2>
              </div>
            </div>
            <div className='row'>
              {/* Product */}
              <div className='col-lg-3 col-sm-6 my-3'>
                <div className='col-12 bg-white text-center h-100 product-item'>
                  <span className='new'>New</span>
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
                      <button className='btn btn-outline-info' type='button'>
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
                  <span className='new'>New</span>
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
                      <button className='btn btn-outline-info' type='button'>
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
                  <span className='new'>New</span>
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
                      <button className='btn btn-outline-info' type='button'>
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
                  <span className='new'>New</span>
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
                      <button className='btn btn-outline-info' type='button'>
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
      {/* Latest Products */}

      <div className='col-12'>
        <hr />
      </div>

      {/* Top Selling Products */}
      <div className='col-12'>
        <div className='row'>
          <div className='col-12 py-3'>
            <div className='row'>
              <div className='col-12 text-center text-uppercase'>
                <h2>Top Selling Products</h2>
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
                      <button className='btn btn-outline-info' type='button'>
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
                      <button className='btn btn-outline-info' type='button'>
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
                      <button className='btn btn-outline-info' type='button'>
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
                      <button className='btn btn-outline-info' type='button'>
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
      {/* Top Selling Products */}
    </main>
  );
};
