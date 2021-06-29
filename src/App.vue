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
ul {
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 8px;
}

</style>