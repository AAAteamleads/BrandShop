<template>
          <header class="header">             
         <nav class="header__menu-content">
            <img class="header__close" :src="require('@/assets/img/close.svg')" alt="close">
            <p class="header__title">MENU</p>
            <ul class="header__menu-list">
               <li class="header__sub-title">MAN</li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Accessories</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Poslání, cíle, fakta</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Denim</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">T-Shirts</a></li>
            </ul>
            <p class="header__sub-title">WOMAN</p>
            <ul class="header__menu-list">
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Accessories</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Jackets & Coats</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Polos</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">T-Shirts</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Shirts</a></li>
            </ul>
            <p class="header__sub-title">KIDS</p>
            <ul class="header__menu-list">
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Accessories</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Jackets & Coats</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Polos</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">T-Shirts</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Shirts</a></li>
               <li class="header__menu-item"> <a class="header__menu-link" href="#">Shirts</a></li>
            </ul>
         </nav>
         <div class="header__inner">
            <div class="container">
               <div class="header__topline">
                  <div class="header__topline-left">
                     <a @click="handleClickMain" class="logo">
                        <img class="header__logo" :src="require('@/assets/img/logo.svg')" alt="logo">
                     </a>
                     <button class="header__search-btn">
                        <img class="header__search-img" :src="require('@/assets/img/search.svg')" alt="search"></button>
                     <form class="header__search" action="form">
                        <input class="header__search-field" type="search" placeholder="Search....">
                     </form>
                  </div>
                  <nav class="header__topline-center">
                  </nav>
                  <div class="header__topline-right">
                     <button class="header__menu">
                        <span class="header__menu-line"></span>
                        <span class="header__menu-line"></span>
                        <span class="header__menu-line"></span>
                     </button>
                     <a @click="handleClickRegistration" class="header__topline-right-link">
                        <img class="header__topline-img" :src="require('@/assets/img/social.svg')" alt="social">
                     </a>
                     <a @click="handleClickCart" class="header__topline-right-link"
                        >
                        <img :src="require('@/assets/img/cart.svg')" alt="cart" class="cart">
                        <div class="header__topline-right-count">0</div>
                     </a>
                  </div>
               </div>

            </div>
         </div>
      </header>
</template>

<script>
export default {
   methods: {
    handleClickCart () {
      console.log('Переход на cart')
      this.$router.push({name: 'cart'})
    },
     handleClickRegistration () {
      console.log('Переход на registration')
      this.$router.push({name: 'registration'})
    },
    handleClickMain () {
      console.log('Переход на main')
      this.$router.push({name: 'main'})
    },
  }
}
</script>
<style scoped>

</style>