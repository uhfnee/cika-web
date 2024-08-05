<!-- App.vue -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --background-color: #EEEEEE;
}

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: var(--background-color); /* Mengatur latar belakang seluruh halaman */
}
</style>
