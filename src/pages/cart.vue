<template>
  <theHeader />
  <div class="wrapper">
      <main class="main">
         <section class="breadcrumb">
            <div class="container">
               <div class="breadcrumb__content">
                  <h1 class="breadcrumb__title">SHOPPING CART</h1>
               </div>
            </div>
         </section>
         <section class="product-cart">
            <div class="container">
               <div class="product-cart__inner">
                  <div class="product-cart__cards">
                     <div class="product-cart__card-wrap">
                        <div class="product-cart__card">
                           <img class="product-cart__img" width="262" height="306" src="img/fe-card-3.jpg"
                              alt="img-cart">
                           <div class="product-cart__right-side">
                              <div class="product-cart__name-wrap">
                                 <h3 class="product-cart__name">
                                    MANGO PEOPLE T-SHIRT
                                 </h3>
                                 <button class="product-cart__close-btn">
                                    <svg class="product-cart__icon-close" viewBox="0 0 18 18"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
                                    </svg>

                                 </button>
                              </div>
                              <ul class="product-cart__list">
                                 <li class="product-cart__item product-cart__item-price">Price: <span
                                       class="product-cart__price-text">$300</span></li>
                                 <li class="product-cart__item product-cart__item-color">Color: <span
                                       class="product-cart__item-text">Red</span></li>
                                 <li class="product-cart__item product-cart__item-size">Size: <span
                                       class="product-cart__item-text">Xl</span></li>
                                 <li class="product-cart__item product-cart__item-quantity">
                                    <p>Quantity:</p><input class="product-cart__item product-cart__item-num"
                                       type="number" value="1" min="1" max="10">
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div class="product-cart__card">
                           <img class="product-cart__img" width="262" height="306" src="img/fe-card-7.jpg"
                              alt="img-cart">
                           <div class="product-cart__right-side">
                              <div class="product-cart__name-wrap">
                                 <h3 class="product-cart__name">
                                    MANGO PEOPLE T-SHIRT
                                 </h3>
                                 <button class="product-cart__close-btn">
                                    <svg class="product-cart__icon-close" viewBox="0 0 18 18"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
                                    </svg>

                                 </button>
                              </div>
                              <ul class="product-cart__list">
                                 <li class="product-cart__item product-cart__item-price">Price: <span
                                       class="product-cart__price-text">$300</span></li>
                                 <li class="product-cart__item product-cart__item-color">Color: <span
                                       class="product-cart__item-text">Red</span></li>
                                 <li class="product-cart__item product-cart__item-size">Size: <span
                                       class="product-cart__item-text">Xl</span></li>
                                 <li class="product-cart__item product-cart__item-quantity">
                                    <p>Quantity:</p><input class="product-cart__item product-cart__item-num"
                                       type="number" value="1" min="1" max="10">
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="product-cart__buttons">
                        <button class="product-info__btn product-cart__btn">CLEAR SHOPPING CART</button>
                        <button class="product-info__btn product-cart__btn">CONTINUE SHOPPING</button>
                     </div>
                  </div>
                  <form class="form" action="#">
                     <div class="form__inner">
                        <p class="form__text">SHIPPING ADRESS</p>
                        <input class="form__field" type="text" placeholder="Bangladesh" required>
                        <input class="form__field" type="text" placeholder="State" required>
                        <input class="form__field" type="text" placeholder="Postcode / Zip" required>
                        <input class="form__btn" type="submit" value="GET A QUOTE">
                     </div>
                     <div class="sub-content">
                        <div class="sub-content__inner">
                           <p class="sub-content__sub">SUB TOTAL<span class="sub-content__total">$900</span>
                           </p>
                           <p class="sub-content__sub sub-content__sub--size-m">GRAND TOTAL<span
                                 class="sub-content__total sub-content__total--red">$900</span></p>
                           <div class="sub-content__line"></div>
                           <button class="sub-content__btn">PROCEED TO CHECKOUT</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </main>
   </div>
   <theFooter />
   <div class="callback">
      <i class="callback__phone fas fa-phone"></i>
   </div>
   
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