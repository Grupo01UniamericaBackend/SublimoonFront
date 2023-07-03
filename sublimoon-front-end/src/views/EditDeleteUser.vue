<template>
  <div class="container">
    <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>

    <div class="divForm">
      <form action="">
        <label for="nomeCliente">Nome:</label>
        <input
          v-model="cliente.nome"
          type="text"
          placeholder="Nome do Produto"
        />

        <label for="senhaCliente">Senha:</label>
        <input
          v-model="cliente.senha"
          type="text"
          placeholder="Senha"
        />

        <label for="cpfCliente">CPF:</label>
        <input
          type="text"
          v-model="cliente.cpf"
          placeholder="Descrição"
        />

        <label for="telefoneCliente">Telefone</label>
        <input type="text"  v-model="cliente.telefone" />

        <label for="email">Email:</label>
        <input type="text" v-model="cliente.email" />



    


        <button
          v-if="form === 'editar'"
          type="button"
          class="btn btn-warning"
          @click="onClickEditar()"
        >
          Editar
        </button>
        <button
          v-if="form === 'deletaCliente'"
          type="button"
          class="btn btn-danger"
          @click="onClickExcluir()"
        >
          Excluir
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import ClienteClient from "@/client/clienteclient";
import { Cliente } from "@/model/cliente";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProdutoFormulario",
  data() {
    return {
      cliente: new Cliente(),

      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string,
      },
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
      ClienteClient.findById(id)
        .then((sucess) => {
          this.cliente = sucess;
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar() {
      ClienteClient.editar(this.cliente.id, this.cliente)
        .then((sucess) => {
          this.cliente = new Cliente();

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir() {
      ClienteClient.deletaCliente(this.cliente.id)
        .then((sucess) => {
          this.cliente = new Cliente();

          this.$router.push({ name: "estoque-main" });
        })
        .catch((error) => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  min-height: 67vh;
  display: flex;
  margin: auto;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.divForm {
  height: 80vh;
  margin-top: 20px;
}
input {
  border-radius: 6px;
}
select {
  border-radius: 6px;
}
#cadastrarbutton {
  margin-top: 20px;
}
</style>
