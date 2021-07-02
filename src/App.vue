<template>
  <Nav />
  <div>
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
}
</script>

<style>
@import "./assets/scss/nav.scss";
</style>