<template>
    <div class="content">
        <div class="row">
            <!-- Will use v-for to iterate over an array of objects
            containing the data necessary to create each card
            object -->
            <ProductCard image="../assets/images/logo.png" name="Test Product" price="$99.99" vendor="GuitarCenter" link="n/a"/>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

    export default {
    name: "PageContent",
    components: { ProductCard }
}
</script>