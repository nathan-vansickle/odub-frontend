<template>
    <div class="content">
        <div class="product-container">
            <!-- Will use v-for to iterate over an array of objects
            containing the data necessary to create each card
            object -->
            <ProductCard v-for="product in testContent" :key="product.name" :image="product.image" :name="product.name" :price="product.price" :vendor="product.vendor" :link="product.link"/>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

    export default {
    name: "PageContent",
    components: { ProductCard },
    data() {
        return {
            testContent: [{image: '@/assets/images/logo.png', 
                           name: 'Test 1', 
                           price: '$1000', 
                           vendor: 'Sweetwater', 
                           link: 'na'},

                           {image: '@/assets/images/logo.png', 
                           name: 'Test 3', 
                           price: '$12', 
                           vendor: 'GuitarCenter', 
                           link: 'na'},

                           {image: '@/assets/images/logo.png', 
                           name: 'Test 4', 
                           price: '$999', 
                           vendor: 'Fender', 
                           link: 'na'},
                        
                           {image: '@/assets/images/logo.png', 
                           name: 'Test 5', 
                           price: '$1000', 
                           vendor: 'Sweetwater', 
                           link: 'na'},

                           {image: '@/assets/images/logo.png', 
                           name: 'Test 6', 
                           price: '$12', 
                           vendor: 'GuitarCenter', 
                           link: 'na'},

                           {image: '@/assets/images/logo.png', 
                           name: 'Test 7', 
                           price: '$999', 
                           vendor: 'Fender', 
                           link: 'na'},
                        
                           {image: '@/assets/images/logo.png', 
                           name: 'Test 8', 
                           price: '$1000', 
                           vendor: 'Sweetwater', 
                           link: 'na'},

                           {image: '@/assets/images/logo.png', 
                           name: 'Test 9', 
                           price: '$12', 
                           vendor: 'GuitarCenter', 
                           link: 'na'},

                           {image: '@/assets/images/logo.png', 
                           name: 'Test 10', 
                           price: '$999', 
                           vendor: 'Fender', 
                           link: 'na'}]
        }
    }
}
</script>

<style>
.product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>