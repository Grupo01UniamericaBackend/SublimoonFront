<template>
    <div class="container_estoque">
      

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Senha</th>
      <th scope="col">CPF</th>
      <th scope="col">Telefone</th>
      <th scope="col">Email</th>
      <th scope="col">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in ClienteList" :key="item.id">
      <th class="col-md-1">{{ item.id }}</th>
      <td>{{ item.nome }}</td>
      <td>{{ item.senha }}</td>
      <td>{{ item.cpf }}</td>
      <td>{{ item.telefone }}</td>
      <td>{{ item.email }}</td>
      <th class="col-md-2">
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <router-link type="button" class="btn btn-sm btn-info" 
                    :to="{ name: 'EditaUsuario', query: { id: item.id, form: 'editar' } } "> 
                  Editar 
                </router-link>
              
              </div>
            </th>
    </tr>

  </tbody>
</table>



    </div>

</template>




<script lang="ts">
import { defineComponent } from "vue";

import ClienteClient from "@/client/clienteclient";
import { Cliente } from "@/model/cliente";


export default defineComponent({
  name: "ClienteLista",
  data() {
    return {
      ClienteList: new Array<Cliente>()
      
    };
  },
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      ClienteClient.listaAll()
        .then((sucess) => {
          this.ClienteList = sucess;

          console.log(this.ClienteList);
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>




<style lang="scss">
    .container_estoque{
        min-height: 80vh;
        margin-top: 4vh;
    }

</style>