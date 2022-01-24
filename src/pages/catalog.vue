<template>
  <theHeader />
  <div class="wrapper">
      <main class="main">
         <section class="breadcrumb">
            <div class="container">
               <div class="breadcrumb__content">
                  <h1 class="breadcrumb__title">NEW ARRIVALS</h1>
                  <div class="breadcrumb__links">
                     <a class="breadcrumb__link" href="#">HOME</a>
                     <a class="breadcrumb__link" href="#">MEN</a>
                     <a class="breadcrumb__link breadcrumb__link--active" href="#">NEW ARRIVALS</a>
                  </div>
               </div>
            </div>
         </section>
         <div class="filter">
            <div class="filter__inner container">
               <div class="sort filter__sort">
                  <details class="filter__sort-toggle">
                     <summary class="filter__filter-text filter__sort-content"><span
                           class="filter__filter-descr">FILTER</span>
                        <svg class="filter__icon-filter" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" />
                        </svg>
                     </summary>
                     <div class="filter__content">
                        <details class="filter__title">
                           <summary>CATEGORY</summary>
                           <ul class="filter__list">
                              <li class="filter__item"><a href="" class="filter__link">Accessories</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Bags</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Denim</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Hoodies & Sweatshirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Jackets & Coats</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Polos</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Shirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Shoes</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Sweaters & Knits</a></li>
                              <li class="filter__item"><a href="" class="filter__link">T-Shirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Tanks</a></li>
                           </ul>
                        </details>

                        <details class="filter-title">
                           <summary>BRAND</summary>
                           <ul class="filter__list">
                              <li class="filter__item"><a href="" class="filter__link">Accessories</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Bags</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Denim</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Hoodies & Sweatshirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Jackets & Coats</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Polos</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Shirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Shoes</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Sweaters & Knits</a></li>
                              <li class="filter__item"><a href="" class="filter__link">T-Shirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Tanks</a></li>
                           </ul>
                        </details>

                        <details class="filter-title">
                           <summary>DESIGNER</summary>
                           <ul class="filter__list">
                              <li class="filter__item"><a href="" class="filter__link">Accessories</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Bags</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Denim</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Hoodies & Sweatshirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Jackets & Coats</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Polos</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Shirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Shoes</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Sweaters & Knits</a></li>
                              <li class="filter__item"><a href="" class="filter__link">T-Shirts</a></li>
                              <li class="filter__item"><a href="" class="filter__link">Tanks</a></li>
                           </ul>
                        </details>
                     </div>
                  </details>
                  <div class="filter__side">
                     <details class="filter__sort-toggle">
                        <summary class="filter__sort-content">TRENDING NOW
                           <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                 fill="#6F6E6E"></path>
                           </svg>
                        </summary>
                        <div class="filter__content filter__content--small">
                           <div class="filter__list filter__small-list">
                              <label><input type="checkbox">
                                 <span class="filter__link">Bags</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">Denim</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">Shoes</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">Polos</span>
                              </label>
                           </div>
                        </div>
                     </details>
                     <details class="sort-toggle filter__sort-toggle">
                        <summary class="sort-content filter__sort-content">SIZE
                           <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                 fill="#6F6E6E"></path>
                           </svg>
                        </summary>
                        <div class="filter__content filter__content--small">
                           <div class="filter__list filter__small-list">
                              <label><input type="checkbox">
                                 <span class="filter__link">XS</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">S</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">M</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">L</span>
                              </label>
                           </div>
                        </div>
                     </details>
                     <details class="sort-toggle filter__sort-toggle">
                        <summary class="sort-content filter__sort-content">PRICE
                           <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                 fill="#6F6E6E"></path>
                           </svg>
                        </summary>
                        <div class="filter__content filter__content--small">
                           <div class="filter__list filter__small-list">
                              <label><input type="checkbox">
                                 <span class="filter__link">10%</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">30%</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">50%</span>
                              </label>
                              <label><input type="checkbox">
                                 <span class="filter__link">100%</span>
                              </label>
                           </div>
                        </div>
                     </details>
                  </div>
               </div>
            </div>
         </div>
         <section class="products">
            <div class="products__catalog-inner products__inner">
               <div class="container">
                  <h2 class="products__main-title hidden">Fetured Items</h2>
                  <p class="products__description hidden">Shop for items based on what we featured in this week</p>
                  <div class="products__items">
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-1.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-2.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-3.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-4.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-5.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-6.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-1.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-2.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-3.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-4.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-5.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" src="img/fe-card-6.jpg" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" src="img/icon-cart.svg" alt="icon-cart">Add to Cart
                              </button>
                           </div>
                        </div>
                        <div class="products__content-title">
                           <h3 class="products__title">ELLERY X M'O CAPSULE</h3>
                           <p class="products__descr">Known for her sculptural takes on traditional tailoring,
                              Australian arbiter of
                              cool
                              Kym Ellery teams up
                              with Moda Operandi.</p>
                           <span class="products__price">$52.00</span>
                        </div>
                     </article>
                  </div>
                  <button class="btn product-info__btn">
                     Browse All Product</button>
               </div>
            </div>
         </section>
         <div class="pagination container">
            <ul class="pagination__inner">
               <li class="pagination__item">
                  <button class="pagination__left-arrow"><i class="fas fa-chevron-left"></i></button>
               </li>
               <li class="pagination__item"><button>1</button>
               </li>
               <li class="pagination__item"><button>2</button>
               </li>
               <li class="pagination__item"><button>3</button>
               </li>
               <li class="pagination__item"><button>4</button>
               </li>
               <li class="pagination__item"><button>5</button>
               </li>
               <li class="pagination__item pagination__dotted"><span>....</span>
               </li>
               <li class="pagination__item"><button>20</button>
               </li>
               <li><button class="pagination__right-arrow"><i class="fas fa-chevron-right"></i></button>
               </li>
            </ul>
         </div>
      </main>
      <section class="feature">
         <div class="feature__inner">
            <div class="container">
               <div class="feature__items">
                  <figure class="feature__item">
                     <img class="feature__img" src="img/icon-1.svg" alt="icon">
                     <figcaption>
                        <h4 class="feature__title">Free Delivery</h4>
                        <p class="feature__desc">Worldwide delivery on all. Authorit tively morph next-generation
                           innov
                           tion
                           with
                           extensive models.</p>
                     </figcaption>
                  </figure>
                  <figure class="feature__item">
                     <img class="feature__img" src="img/icon-2.svg" alt="icon">
                     <figcaption>
                        <h4 class="feature__title">Sales & discounts</h4>
                        <p class="feature__desc">Worldwide delivery on all. Authorit tively morph next-generation
                           innov
                           tion
                           with
                           extensive models.</p>
                     </figcaption>
                  </figure>
                  <figure class="feature__item">
                     <img class="feature__img" src="img/icon-3.svg" alt="icon">
                     <figcaption>
                        <h4 class="feature__title">Quality assurance</h4>
                        <p class="feature__desc">Worldwide delivery on all. Authorit tively morph next-generation
                           innov
                           tion
                           with
                           extensive models.</p>
                     </figcaption>
                  </figure>
               </div>
            </div>
         </div>
      </section>
   </div>
   <div class="callback">
      <i class="callback__phone fas fa-phone"></i>
   </div>
   <theFooter />
</template>

<script>
  import theHeader from '../components/theHeader.vue'
  import theFooter from '../components/theFooter.vue'

export default {
  name: 'pageCart',
  components: { theHeader, theFooter }
}
</script>

<style>

</style>