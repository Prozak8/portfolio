<template>
  <div id="app">
    <div class="col--nav">
      <navigation :routes="routes" />
    </div>
    <div class="col--content">
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
  },
  data() {
    return {
      routes: [
        { route: "/", name: "Home" },
        { route: "/about", name: "About" },
        { route: "/projects", name: "Projects" }
      ]
    };
  }
};
</script>

<style lang="sass">
@import '@/styles/main.sass'
#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $color-black
  display: flex
  flex-direction: column
  background-color: $color-white
  height: 100vh
  width: 100vw
  @media screen and (min-width: $breakpoint-md)
    flex-direction: row
</style>
