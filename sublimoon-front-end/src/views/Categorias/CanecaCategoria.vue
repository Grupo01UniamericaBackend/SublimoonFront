<template>
  <div class="container">
   

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
          <a href="#" class="btn btn-primary">Visualizar produto</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProdutoClient from "@/client/produtoclient";
import { Produto } from "@/model/produto";

export default defineComponent({
  name: "ProdutoLista",
  data() {
    return {
      ProdutosList: new Array<Produto>(),
    };
  },
  mounted() {
    this.findCaneca();
  },
  methods: {
    findCaneca() {
      ProdutoClient.findByCaneca()
        .then((sucess) => {
          this.ProdutosList = sucess;

          console.log(this.ProdutosList);
        })
        .catch((error) => {
          console.log(error);
        });
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
</style>
