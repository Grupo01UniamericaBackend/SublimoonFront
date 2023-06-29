<template>
    <div class="container">
        <div class="divForm">
            <form action="">
                <label for="nomeProduto">Nome:</label>
                <input type="text" placeholder="Nome do Produto">

                <label for="selectCategoria">Categoria:</label>
                    <select name="categorias" id="categoriasSelect">
                    <option value="salve">save?</option>
                    </select>
<!--
                    <label for="recipient-name" class=" row m-auto col-form-label">Selecione a Cor:</label>
                    <select v-model="veiculo.cor">
                    <option option v-for="opcao in opcoesCor" :value="opcao" :key="opcao">{{ opcao }}</option>
                    </select>
-->
                <label for="descricaoProduto">Descrição:</label>
                <input type="text" placeholder="Descrição">

                <label for="img">Selecionar Imagem:</label>
                <input type="file" id="img" name="img" accept="image/*">

                <button v-if="form === undefined" type="button" 
                    class="btn btn-success" @click="">
                     Cadastrar 
                </button>
            </form>
         </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { Cor } from '@/model/cor';

export default defineComponent({
  name: 'ProdutoCadastrar',
  data() {
    return { 
        corSelecionada: '',
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
    }
  },
  computed: {
    opcoesCor(): string[] {
    return Object.values(Cor).map(cor => String(cor));
  },
  },
  mounted() { 

  },
  methods: {
    /*
    findAllCor(){
     ModeloClient.listaAll().then(sucess =>{
       this.modelo = sucess;
       console.log(sucess);
     })
     .catch(error =>{
         console.log(error)

       })

   } */
    
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