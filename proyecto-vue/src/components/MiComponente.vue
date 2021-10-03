<template>
  <div>
    <h1>{{titulo}}</h1>
    <h2>{{subtitulo}}</h2>
    <input v-model="titulo" type="text/">

  </div>
</template>

<script>
export default {
    //data contiene todas las variables globales del componente
    data:() =>{
        return{
            titulo: 'Titulo Componente',
            subtitulo: ' Componente',
        }

    },
    methods: {

    }
};
</script>

<style>
</style>