<template>
    <footer>
     <div class="main">
        <div class="redesDiv">
            <img  id="imgInsta" src="../assets/InstaBrancoSemFundo.png" alt="">
            <img id="imgFacebook" src="../assets/facebook.png" alt="">
        </div>
        <div class="contatoDiv">
                <ul>
                    <li><strong>Contato</strong></li>
                    <li>5545999568491</li>
                    <li>45999568491</li>
                    <li>vendas.sublimoon@gmail.com</li>
                    <li>Av. General Meira, 3120</li>
                </ul>
        </div>
     </div>
    </footer>
</template>

<script lang="ts">
  export default {
    name: "Footer",
  };
  </script>

<style>
    footer{
        height: 20vh;
        background-color: rgb(37, 37, 37);
    }
    p{
        color: white;
    }
    li{
        color: white;
        font-size: 95%;
    }
    ul{
       list-style: none;
    }
    #imgInsta{
        height: 60px;
        width: auto;
    }
    #imgFacebook{
        width: auto;
        height: 47px;
    }
    .redesDiv{
     width: 30%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .contatoDiv{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main{
        display: flex;
        flex-direction: space-between;
    }
</style>