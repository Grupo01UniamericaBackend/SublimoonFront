<template>
  <div class="container">
    <div id="carousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/carrosel-Frete-Gratis.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner-subli-certo.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="col-md-12 text-start" id="produtooo">
      <div
        v-for="item in ProdutosList"
        :key="item.id"
        class="card"
        style="width: 18rem"
      >
        <img src="{{ item.imagem }}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ item.nome }}</h5>
          <p class="card-text">R${{ item.preco }}</p>
          <router-link
            type="button"
            class="btn btn-sm btn-primary"
            :to="{ name: 'produto', query: { id: item.id } }"
          >
            Visualizar produto
          </router-link>
          <img  class="fav"  @click="Favoritar()" v-if="item.ativo == false" src="../assets/contorno-em-forma-de-coracao.png" />
          <img class="fav" @click="Desfavoritar(item)" v-if="item.ativo == true" src="../assets/silhueta-em-forma-de-coracao.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProdutoClient from "@/client/produtoclient";
import { Produto } from "@/model/produto";
import produtoclient from "@/client/produtoclient";

export default defineComponent({
  name: "ProdutoLista",
  data() {
    return {
      ProdutosList: new Array<Produto>(),
      produto: new Produto(),
    };
  },
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      ProdutoClient.listaAll()
        .then((sucess) => {
          this.ProdutosList = sucess;

          console.log(this.ProdutosList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Favoritar() {
      ProdutoClient.fav(this.produto.id, this.produto)
        .then((sucess) => {
          this.produto = new Produto();

         console.log(sucess)
        })
        .catch((error) => {
          console.log(error)
        });
    },
    Desfavoritar(item: Produto) {
      item.ativo = false;
    },
  },
});
</script>

<style lang="scss">
.container {
  //background-color: red;
  min-height: 100vh;
  width: 100%;
}
#carousel {
  width: 100%;
  background-color: purple;
}

.card-text {
  color: black;
}

#produtooo {
  display: flex;
  flex-direction: row;
}

.fav{

width: 50px;


}
</style>
