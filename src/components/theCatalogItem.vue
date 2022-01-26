<template>
    <article class="products__item">
        <div class="products__img">
            <img class="products__img-card" :src="require('@/assets/img/fe-card-1.jpg')" alt="product">
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
                cooldsgsdgsgsg
                Kym Ellery teams up
                with Moda Operandi.</p>
            <span class="products__price">$52.00</span>
        </div>
    </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>