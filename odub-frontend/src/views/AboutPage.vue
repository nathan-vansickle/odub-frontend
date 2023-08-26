<template>
    <PageHeader/>
    <h1>About</h1>

    <h2>About Odub</h2>
    <p>Odub is an app that was built for two objectives: to provide a useful service aggregating guitar
         sale items from the internet, as well as giving me an opportunity to showcase many of the things I've
         learned during my computer science degree and software internship. The idea was born out of my passion
         for playing guitar and trying to find a way to integrate that passion into my software engineering studies.
    </p>

    <p>
        Odub (which stands for Overdrive and Under Budget) uses a Vue.js frontend and a Django backend. I discovered a 
         love for JavaScript during my first internship rotation the with The J.M. Smucker Co. in summer 2022, and
         worked on a project in Vue during my second rotation. I also picked up Python in my spare time during my
          software development internship in summer 2023 (again at Smucker's) and that was the main factor behind
          my decision to use Django on the backend.
    </p>

    <h2 id="author-header">About the Author</h2>

    <div class="author-desc">
        <img src="../assets/images/nathan-vansickle.png">
        <p>
        Hello! My name is Nathan VanSickle and I'm a third-year commputer science at The Ohio State University
         in Columbus, Ohio. In my free time, I love playing electric guitar, lifting, and listening to Elvis
         music. 
        </p>
    </div>
    

    
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
    name: "AboutPage",
    components: {
        PageHeader
    }
}
</script>

<style>
h2 {
    margin-left: 15px;
}

p {
    margin-left: 15px;
    font-size: 20px;
    margin-right: 15px;
}

#author-header {
    margin-top: 40px;
}

.author-desc img {
    height: 125px;
    width: auto;
    border-radius: 50%;
    margin-right: 10px;
}

.author-desc {
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-top: 15px;
}
</style>