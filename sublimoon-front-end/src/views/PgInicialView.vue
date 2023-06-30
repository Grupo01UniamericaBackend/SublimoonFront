<template>
     <div class="container">
        <div id="carousel" class="carousel slide">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/carrosel-Frete-Gratis.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../assets/banner-subli-certo.png" class="d-block w-100" alt="...">
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Next</span>
        </button>
        </div>



     </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
    .container{
        //background-color: red;
        min-height: 100vh;
        width: 100%;
    }
    #carousel{
        width: 100%;
        background-color: purple;
    }
</style>