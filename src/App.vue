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
@import "./assets/scss/prjmng2.scss";
@import "./assets/scss/input_box.scss";
</style>