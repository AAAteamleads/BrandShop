<template>
   <section class="products">
            <div class="products__inner">
               <div class="container">
                  <h2 class="products__main-title">Fetured Items</h2>
                  <p class="products__description">Shop for items based on what we featured in this week</p>
                  <div class="products__items">
                     <catalog-item></catalog-item>
                  </div>
                  <a class="product-info__link--white btn product-info__btn product-info__btn--white-text"
                     href="catalog.html">Browse All Product</a>
               </div>
            </div>
         </section>
</template>

<script>
import CatalogItem from './theCatalogItem.vue'
export default {

  components: {
   
    CatalogItem
  }
}
</script>

<style>

</style>