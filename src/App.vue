<template>
  <div id="app">
    <MenuBar/>
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
}
body {
  background-color: #ffffff54;
}
</style>