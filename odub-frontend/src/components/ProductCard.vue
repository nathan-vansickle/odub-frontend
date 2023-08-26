<template>
    <div class="card">
        <img src="@/assets/images/logo.png" :alt="name" class="product-image">
        <h3 class="product-name">{{ name }}</h3>
        <h2 class="price">{{ price }}</h2>
        <p class="link">Buy at <a href="https://google.com">{{ vendor }}</a></p>
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

.card {
    border-style: solid;
    border-width: 2px;
    border-radius: 15px;
    width: 220px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 20px;
}

.card img {
    height: 200px;
    width: 200px;
    padding-top: 10px;
    padding-left: 10px;
}

.link {
    padding-left: 10px;
}

.product-name {
    padding-left: 10px;
}

.price {
    padding-left: 10px;
}
</style>