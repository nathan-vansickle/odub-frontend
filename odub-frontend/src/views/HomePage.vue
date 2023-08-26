<template>
    <PageHeader/>
    <h1>Home</h1>
    <div class="deal-header">
    <h2>Today's Deals from <a href="https://www.sweetwater.com/dealzone">Sweetwater</a> and <a href="https://www.guitarcenter.com/All-Deals.gc">GuitarCenter</a></h2>
    </div>
    <PageContent/>
</template>

<script>
import PageContent from '@/components/PageContent.vue';
import PageHeader from '@/components/PageHeader.vue'

export default {
    name: "HomePage",
    components: {
    PageHeader,
    PageContent
}
}
</script>

<style>
h1 {
    margin-left: 15px;
    margin-bottom: 40px;
}

.deal-header h2 {
    margin-left: 15px;
    margin-bottom: 30px;
}

</style>