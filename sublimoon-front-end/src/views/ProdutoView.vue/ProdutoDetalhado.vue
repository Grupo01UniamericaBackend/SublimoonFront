<template>
  <div class="mainprod">
    <div class="containerr" >
      <div class="imagemproduto">

        <img :src="produto.imagem" class="card-img-top" alt="..."   style="width: 23rem"/>
      </div>

      <div class="tituloprod">
        <h2><strong>    {{ produto.nome }}</strong></h2>

        <h3>R${{ produto.preco }}</h3>

        <div>
          <button type="button" class="btn btn-info" id="botaoadd">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>

    <div class="descricaoo">
    <h2>Descrição</h2>
    <h4>{{ produto.descricao }}</h4>
</div>

  </div>
</template>

<script lang="ts">
import ProdutoClient from "@/client/produtoclient";
import { Produto } from "@/model/produto";
import { defineComponent } from "vue";
import { Cor } from "@/model/cor";
import { Categoria } from "@/model/categoria";

export default defineComponent({
  name: "ProdutoFormulario",
  data() {
    return {
      produto: new Produto(),
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    form() {
      return this.$route.query.form;
    },
  },
  mounted() {
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
  },
  methods: {
    findById(id: number) {
      ProdutoClient.findById(id)
      
        .then((sucess) => {
          this.produto = sucess;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style lang="scss">
.containerr {
  width: 100%;
  display: flex;  
  color: #153b75;
}

.imagemproduto {
  margin-top: 40px;
  margin-bottom: 50px;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
 
}
.tituloprod {
  
  width: 60vw;
  height: 50vh;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
    justify-content: space-between;
  
}
#botaoadd{
  width: 50%;
  height: 150%;
  font-size: 2rem;
  background-color: #153b75;
  color: white;
}
.tituloprod h2{

font-size: 60px;

}

.mainprod {
  min-height: 80vh;
  margin-top: 50px;
}

.card-text {
  color: #153b75;
}

#produtooo {
  display: flex;
  flex-direction: row;
}
.descricaoo{

min-height: 20vh;
width: 80%;
margin-left: 10%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

}
</style>
