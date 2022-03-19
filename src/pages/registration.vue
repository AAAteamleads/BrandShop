<template>
  <!-- <theHeader /> -->
  <div class="wrapper">
      
      <main class="main">
         <section class="breadcrumb">
            <div class="container">
               <div class="breadcrumb__content">
                  <h1 class="breadcrumb__title">REGISTRATION</h1>
               </div>
            </div>
         </section>
         <section class="registration">
            <div class="container">
               <div class="registration__inner">
                  <form class="form registration__form" action="#">
                     <div class="form__inner registration__inner--wide">
                        <p class="form__text">Your Name</p>
                        <input class="form__field" type="text" placeholder="First Name" required>
                        <input class="form__field" type="text" placeholder="Last Name" required>
                        <div class="form__fields">
                           <label><input class="form__select" type="radio" name="gender" required>Male</label>
                           <label><input class="form__select" type="radio" name="gender" required>Female</label>
                        </div>
                        <p class="form__text">Login details</p>
                        <input class="form__field" placeholder="Email" type="email" required>
                        <input class="form__field" placeholder="Password" type="password" required>
                        <p class="form__desc">Please use 8 or more characters, with at least 1 number and a mixture of
                           uppercase and
                           lowercase letters</p>
                        <button class="sub-content__btn registration__btn" type="submit">JOIN NOW<i
                              class="registration__arrow-btn fas fa-arrow-right"></i></button>
                     </div>
                  </form>
                  <div class="registration__right-side">
                     <h2 class="registration__title">LOYALTY HAS ITS PERKS</h2>
                     <p class="registration__text">Get in on the loyalty program where you can earn points and unlock
                        serious perks. Starting with these as soon as you join:</p>
                     <ul class="registration__list">
                        <li class="registration__item">15% off welcome offer</li>
                        <li class="registration__item">Free shipping, returns and exchanges on all orders
                        </li>
                        <li class="registration__item">$10 off a purchase on your birthday
                        </li>
                        <li class="registration__item">Early access to products</li>
                        <li class="registration__item">Exclusive offers & rewards</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      </main>
   </div>
   <!-- <the-footer /> -->
   <div class="callback">
      <i class="callback__phone fas fa-phone"></i>
   </div>
</template>

<script>
//   import theHeader from '../components/theHeader.vue'
//   import theFooter from '../components/theFooter.vue'
export default {
  name: 'pageRegistration',
//   components: { theHeader, theFooter }
}
</script>

<style>

</style>