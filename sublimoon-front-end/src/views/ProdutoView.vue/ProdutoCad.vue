<template>
    <div class="container">

      <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>

        <div class="divForm">
            <form action="">
                <label for="nomeProduto">Nome:</label>
                <input v-model="produto.nome" type="text" placeholder="Nome do Produto">

               <!-- <label for="selectCategoria">Categoria:</label>
                    <select name="categorias" id="categoriasSelect">
                    <option value="salve">save?</option>
                    </select> -->

                    <label for="recipient-name" class=" row m-auto col-form-label">Selecione a Cor:</label>
                    <select v-model="produto.cor">
                      <option v-for="item in cor" :value="item">{{ item }} </option>
                    </select>

                <label for="descricaoProduto">Descrição:</label>
                <input type="text" v-model="produto.descricao" placeholder="Descrição">

                <label for="img">Insira a URL da imagem:</label>
                <input type="text" id="img" name="img" v-model="produto.imagem">

                <label for="img">Valor do produto:</label>
                <input type="number" id="valor" name="valor" v-model="produto.preco">

                <label for="img">Tamanho/Capacidade do produto:</label>
                <input type="text" id="tamanho" name="tamanho" v-model="produto.tamanho">

           
               

                
                <button  type="button" 
                    class="btn btn-success" @click="onClickCadastrar()">
                     Cadastrar 
                </button>
            </form>
         </div>
    </div>
</template>

<script lang="ts">

import  ProdutoClient from '@/client/produtoclient'; 
import { Produto } from '@/model/produto';
import { defineComponent } from 'vue';
import { Cor } from '@/model/cor';

export default defineComponent({
name: 'ProdutoFormulario',
data() {
  return { 
    produto: new Produto(),
    cor: Cor,
    mensagem: {
      ativo: false as boolean,
      titulo: "" as string,
      mensagem: "" as string,
      css: "" as string
    }
  }
},
computed: {
  id () {
    return this.$route.query.id
  },
  form () {
    return this.$route.query.form
  }
},
mounted() { 

  if(this.id !== undefined){
    this.findById(Number(this.id));
  }


},
methods: {

 



  onClickCadastrar(){
    ProdutoClient.cadastrar(this.produto)
      .then(sucess => {
        this.produto = new Produto()
        
        this.mensagem.ativo = true;
        this.mensagem.mensagem = sucess;
        this.mensagem.titulo = "Parabens. ";
        this.mensagem.css = "alert alert-success alert-dismissible fade show";
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        console.log(error);
      });
  },
  findById(id: number){
    ProdutoClient.findById(id)
      .then(sucess => {
        this.produto = sucess
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  },
  onClickEditar(){
    ProdutoClient.editar(this.produto.id, this.produto)
      .then(sucess => {
        this.produto = new Produto()
        
        this.mensagem.ativo = true;
        this.mensagem.mensagem = sucess;
        this.mensagem.titulo = "Parabens. ";
        this.mensagem.css = "alert alert-success alert-dismissible fade show";
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  },
  onClickExcluir(){
    ProdutoClient.deletaProduto(this.produto.id)
      .then(sucess => {
        this.produto = new Produto()
        
        this.$router.push({ name: 'produto-lista-view' });
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  }
}
});

</script>
  

<style lang="scss">
    .container{
        min-height: 67vh;
        display: flex;
        margin: auto;
        justify-content: center;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>