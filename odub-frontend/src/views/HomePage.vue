<template>
    <PageHeader/>
    <h1>Home</h1>
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