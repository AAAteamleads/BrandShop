'use strict';

const productImages = 'img';
const urlProductImages = `${productImages}`;
const featuredItemsEl = document.querySelector('.products__items');

const getProductMarkup = (product) => {
   return `
   <article class="products__item">
   <div class="products__img">
      <img class="products__img-card" src="${urlProductImages}/${product.image}" alt="${product.name}">
      <div class="products__overlay">
         <button class="products__btn data-id=${product.id}">
            <img class="products__icon-cart" src="${productImages}/icon-cart.svg">Add to Cart
         </button>
      </div>
   </div>
   <div class="products__content-title">
      <h3 class="products__title">${product.name}</h3>
      <p class="products__descr">${product.description}</p>
      <span class="products__price">$${product.price}</span>
   </div>
</article>`
};

/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} featuredItemsEl элемент с классом .featuredItems
 */
function insertProductsIntoPage(products, featuredItemsEl) {
   let productsMarkup = '';
   for (let product of products) {
      productsMarkup += getProductMarkup(product);
   }
   featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
* Функция назначает обработку клика на все кнопки "Add to cart".
*/
function addEventListenersForAddToCartButtons() {
   const addToCartBtns = document.querySelectorAll('button[data-id]');
   addToCartBtns.forEach(function (button) {
      button.addEventListener('click', addedProductHandler);
   })

}

/**
* Функция-обработчик события клика по кнопке "Add to cart".
* @param {MouseEvent} event
*/
function addedProductHandler(event) {
   const productId = event.currentTarget.getAttribute('data-id');
   addProductIntoBasket(productId);

}


insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();




