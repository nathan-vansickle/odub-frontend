<template>
    <header class="header">

        <div class="logo-div">
            <img id="logo" src="../assets/images/logo.png"/>
        </div>  

        <div class="header-text">
            <h3 id="logo-text">Overdrive and Under Budget</h3>
        </div>
        
        <nav class="nav-bar">
            <ul id="navbar">
                <a href="/home">Home</a>
                <a href="/about">About</a>
            </ul>             
        </nav>  

    </header>
</template>

<script>
export default {
    name: "PageHeader"
}
</script>

<style>
.header {
    display: flex;
    align-items: center;
    background-color: #BA0C2F;
    border-bottom: 2px solid black;
    height: 100px;
}

.header-text {
    color: white;
    padding-left: 10px;
    font-family: 'League Spartan', sans-serif;
}

.logo-div {
    height: 100px;
}

.logo-div img {
    height: 100px;
    width: 100px;
}

.nav-bar {
    margin-left: auto;
}

.nav-bar ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding-right: 40px;
}

.nav-bar a {
    text-decoration: none;
    color: white;
    font-family: 'League Spartan', sans-serif;
}

</style>