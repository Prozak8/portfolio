<template>
  <div id="app">
    <header class="col flex-center-center">
      <navigation />
    </header>
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
  @media screen and (max-width: $breakpoint-md)
    flex-direction: column
    
  header
    background-color: $black
</style>
