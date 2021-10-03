<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 style="color: green">MI APLICACION DE VUE</h1>
    <mi-componente />
  </div>
</template>

<script>
import MiComponente from "./components/MiComponente.vue";

export default {
  name: "App",
  components: {
    MiComponente,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
