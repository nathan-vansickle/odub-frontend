<template>
    <header class="header">
        <div id="top-header"> 
            <div class="logo-div">
                <img id="logo" src="../assets/images/logo.png"/>
            </div>  
            <h3 id="logo-text"><em>Overdrive and Under Budget</em></h3>
        </div>    
    </header>
</template>

<script>
export default {
    name: "PageHeader"
}
</script>

<style>
.header {
    height: 100px;
    width: auto;
    margin-top: 0;
    margin-bottom: 0;
    background-color: #BA0C2F;
}

#logo-text {
    display: inline-block;
    vertical-align: middle;
    color: white;
    padding-left: 7px;
}

#logo {
    height: 100px;
    width: 100px;
}

.top-header {
    background-color: #BA0C2F;
}

.logo-div {
    display: inline-block;
    vertical-align: middle;
}

</style>