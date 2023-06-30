<template>
    <header>
        <nav>
            <a href="/">
            <img id="logo" src="../assets/iconeSublimoon.png" alt="Icone Sublimoon"> 
            </a>
            <div class="divPlaceholder">
           <!-- <input type="text" name="Buscar" id="BuscarInput" placeholder="Buscar">
            <button id="botaoSearch">🔍</button> -->
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
            </div>
            <router-link to="" class="categ">Masculino</router-link>
            <router-link to="" class="categ">Feminino</router-link>
            <router-link to="" class="categ">Canecas</router-link>
            <router-link to="" class="categ">Garrafas</router-link>
            <router-link to="" class="categ">Personalizados</router-link>
            <router-link to="" class="icons">🛒</router-link>
            <router-link to="" class="icons">💙</router-link>
            <router-link to="/Usuario" class="icons">👤</router-link>
         </nav>
         <div class="barra"></div>
         <router-view/>
    </header>
</template>

<script lang="ts">
  export default {
    name: "NavBar",
  };
  </script>

<style lang="scss">

#logo{
  width: 5vw;
  height: auto;
}
#logo:hover{
  transition: 1s;
  scale: 120%;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  //padding: 30px;
  display: flex;
  height: 13vh;
  margin: auto;
  justify-content: space-around;
  align-items: center;


    &.router-link-exact-active {
      color: #5e17eb;
      font-size: 2vw;
      font-weight: 600;
      text-decoration: none;
      font-family: system-ui, 'Segoe UI', Roboto, Oxygen, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  
}

.categ{
  color: #153b75;
      font-size: 1.7vw;
      font-weight: 600;
      text-decoration: none;
      font-family: system-ui, 'Segoe UI', Roboto, Oxygen, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.categ:hover{
  transition: 0.5s;
  color: #2669c7;
}
.icons{
  font-size: 2vw;
  text-decoration: none;
}
.icons:hover{
  transition: 0.5s;
  scale: 150%;
}

.divPlaceholder{
  background-color: #3463a3;
  padding: 0.4% 0.4%;
  border-radius: 8px;
}
.barra{
  background-color: #3463a3;
  height: 25px;
}
</style>