<template>
  <div>
    <h1>{{ titulo }}</h1>
    <h2>{{ subtitulo }}</h2>
    <input v-model="numero_1" type="number" placeholder="numero 1" />
    <br />
    <input v-model="numero_2" type="number" placeholder="numero 2" />
    <br />
    <button v-on:click="sumar">sumar</button>
    <button v-on:click="restar">restar</button>
    <button v-on:click="dividir">dividir</button>
    <button v-on:click="multiplicar">multiplicar</button>
    <br />
    <span>Resultado : {{ resultado }}</span>
  </div>
</template>

<script>
export default {
  //data contiene todas las variables globales del componente
  data: () => {
    return {
      titulo: "Titulo Componente",
      subtitulo: " Componente",
      numero_1: null,
      numero_2: null,
      resultado: "",
    };
  },
  methods: {
    sumar() {
      this.resultado = parseInt(this.numero_1) + parseInt(this.numero_2);
    },
    restar() {
      this.resultado = parseInt(this.numero_1) - parseInt(this.numero_2);
    },
    multiplicar() {
      this.resultado = parseInt(this.numero_1) * parseInt(this.numero_2);
    },
    dividir() {
      this.resultado = parseInt(this.numero_1) / parseInt(this.numero_2);
    },
  },
};
</script>

<style>
</style>