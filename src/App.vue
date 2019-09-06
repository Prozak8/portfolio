<template>
  <div id="app">
    <div class="col">
      <navigation />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";

export default {
  name: "app",
  components: {
    navigation: Navigation
  }
};
</script>

<style lang="sass">
@import '@/styles/main.sass'
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $black
  height: 100vh
  width: 100vw
  display: flex
</style>
