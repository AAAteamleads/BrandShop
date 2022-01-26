<template>
       <footer class="footer">
      <div class="footer__inner">
         <div class="white-overlay"></div>
         <div class="footer__items container">
            <figure class="footer__item">
               <img :src="require('@/assets/img/intersect.png')" alt="sub-img">
               <figcaption>
                  <p class="footer__quote">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <i>a pulvinar
                        purus
                        condimentum“</i>
                  </p>
               </figcaption>
            </figure>
            <div class="footer__item footer__contact">
               <h5 class="footer__title">SUBSCRIBE</h5>
               <p class="footer__descr">FOR OUR NEWLETTER AND PROMOTION</p>
               <form class="footer__send">
                  <input class="footer__input" type="email" placeholder="Enter Your Email" required>
                  <input class="footer__btn" type="submit" value="Subscribe">
               </form>
            </div>
         </div>
      </div>
      <div class="bottom-line">
         <div class="bottom-line__inner">
            <div class="container">
               <div class="bottom-line__wrapper">
                  <p class="bottom-line__copyright">
                     © 2021 Brand All Rights Reserved.
                  </p>
                  <div class="bottom-line__socials">
                     <ul class="bottom-line__socials-icons">
                        <li class="bottom-line__item">
                           <a class="bottom-line__social-link" href="#">
                              <fa :icon="['fab', 'facebook']" class="bottom-line__icon" />
                           </a>
                        </li>
                        <li class="bottom-line__item">
                           <a class="bottom-line__social-link" href="#">
                              <fa :icon="['fab', 'instagram']" class="bottom-line__icon" />
                           </a>
                        </li>
                        <li class="bottom-line__item">
                           <a class="bottom-line__social-link" href="#">
                              <fa :icon="['fab', 'pinterest-p']" class="bottom-line__icon" />
                           </a>
                        </li>
                        <li class="bottom-line__item">
                           <a class="bottom-line__social-link" href="#">
                              <fa :icon="['fab', 'twitter']" class="bottom-line__icon" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>
<script></script>
<style scoped>

</style>