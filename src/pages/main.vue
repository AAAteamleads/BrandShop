<template>
  <!-- <theHeader /> -->
  <div class="wrapper">
      <main class="main">

         <section class="preview">
            <div class="preview__inner">
               <!-- <video class="preview__video" src="media/Time_Lapse.mp4" autoplay muted loop></video> -->
               <div class="preview__content container">
                  <div class="preview__img">
                  </div>
                  <div class="preview__heading-title">
                     <h1 class="preview__title">The brand
                        <span class="preview__desc"> of luxerious</span>
                        <span class="preview__desc preview__desc--pink">fashion</span>
                     </h1>
                  </div>
               </div>
            </div>
         </section>
         <section class="category">
            <div class="category__inner">
               <div class="container">
                  <h2 class="category__heading category__heading hidden">Категория товаров</h2>
                  <div class="category__items">
                     <div class="category__item-wrap">
                        <div class="category__item category__item-women">
                           <p class="category__text">30% OFF</p>
                           <h3 class="category__title">FOR WOMEN</h3>
                        </div>
                     </div>
                     <div class="category__item-wrap">
                        <div class="category__item category__item-men">
                           <p class="category__text">HOT DEAL</p>
                           <h3 class="category__title">FOR MEN</h3>
                        </div>
                     </div>
                     <div class="category__item-wrap">
                        <div class="category__item category__item-kids">
                           <p class="category__text">NEW ARRIVALS</p>
                           <h3 class="category__title">FOR KIDS</h3>
                        </div>
                     </div>
                     <div class="category__item-wrap category__item-wrap--item-accesories">
                        <div class="category__item category__item-accesories">
                           <p class="category__text">LUXIROUS & TRENDY</p>
                           <h3 class="category__title">ACCESORIES</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="products">
            <div class="products__inner">
               <div class="container">
                  <h2 class="products__main-title">Fetured Items</h2>
                  <p class="products__description">Shop for items based on what we featured in this week</p>
                  <div class="products__items">
                     <article class="products__item">
                        <div class="products__img">
                           <img class="products__img-card" :src="require('@/assets/img/fe-card-1.jpg')" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" :src="require('@/assets/img/icon-cart.svg')"  alt="icon-cart">Add to Cart
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
                           <img class="products__img-card" :src="require('@/assets/img/fe-card-2.jpg')" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" :src="require('@/assets/img/icon-cart.svg')" alt="icon-cart">Add to Cart
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
                           <img class="products__img-card" :src="require('@/assets/img/fe-card-3.jpg')" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" :src="require('@/assets/img/icon-cart.svg')" alt="icon-cart">Add to Cart
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
                           <img class="products__img-card" :src="require('@/assets/img/fe-card-4.jpg')" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" :src="require('@/assets/img/icon-cart.svg')" alt="icon-cart">Add to Cart
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
                           <img class="products__img-card" :src="require('@/assets/img/fe-card-5.jpg')" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" :src="require('@/assets/img/icon-cart.svg')" alt="icon-cart">Add to Cart
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
                           <img class="products__img-card" :src="require('@/assets/img/fe-card-6.jpg')" alt="product">
                           <div class="products__overlay">
                              <button class="products__btn">
                                 <img class="products__icon-cart" :src="require('@/assets/img/icon-cart.svg')" alt="icon-cart">Add to Cart
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
                  <a @click="handleClickProduct" class="product-info__link--white btn product-info__btn product-info__btn--white-text">Browse All Product</a>
               </div>
            </div>
         </section>
         <the-features />
      </main>
   </div>
   <div class="callback">
      <i class="callback__phone fas fa-phone"></i>
   </div>
</template>

<script>
import theFeatures from '../components/theFeatures.vue'
//   import theHeader from '../components/theHeader.vue'
//   import theFooter from '../components/theFooter.vue'
export default {
  name: 'mainPage',
//   components: { theHeader, theFooter }
components: {
   theFeatures
},
methods: {
    handleClickProduct () {
      console.log('Переход на Product')
      this.$router.push({name: 'product'})
    },
  }
}
</script>

<style>

</style>