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
            <button @click="createProductItem"> New create</button>
            <button @click="queryProductItem"> Query create</button>
            
            <div v-for="item in productItem" :key="item.id">
                {{item.id}}{{item.product_name}}
                <button @click="deleteProductItem"> Delete create</button>
            </div>
        </div>
    </article>
    

    
    
</template>

<script>
import { DataStore } from '@aws-amplify/datastore';
import { ProductItem } from '../models';

export default {
    data:(()=>({
        productItem:[]
    })),
    methods:{
        async createProductItem() {

            await DataStore.save(
                new ProductItem({
                    "product_name": "wikiti",
                    "cost": 123.45,
                    "description": "Lorem ipsum dolor sit amet",
                    "genderID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
                    "sizes": []
                })
            );


        },

        async queryProductItem() {

            const models = await DataStore.query(ProductItem);
            this.productItem =models;
            console.log(models);  
        },

        async deleteProductItem() {
            
            const modelToDelete = await DataStore.query(ProductItem,this.ProductItem.id);
            
            // // console.log(modelToDelete)
            DataStore.delete(modelToDelete);
        }

    }
}
            
    
    


</script>

<style lang="scss" scoped>
button{
    background-color: rgb(97, 65, 65);
    width: 100px;
    height: 100px;
}
</style>