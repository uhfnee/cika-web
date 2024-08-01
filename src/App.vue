<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background:#EEEEEE; /* Mengatur latar belakang seluruh halaman */
}
</style>
