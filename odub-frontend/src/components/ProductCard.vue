<template>
    <div class="card">
        <img :src="image" :alt="name" class="product-image">
        <h3>{{ name }}</h3>
        <h4>{{ price }}</h4>
        <p>Buy at <a href="https://google.com">{{ vendor }}</a></p>
    </div>
</template>

<script>
export default {
    name: "ContentCard",
    props: {
        image: String,
        name: String,
        price: String,
        vendor: String,
        link: String
    }
}
</script>

<style>
card img {
    height: 500px;
    width: auto;
}
</style>