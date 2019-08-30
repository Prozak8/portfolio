<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
  },
  props: {}
};
</script>

<style scoped lang="sass">
@import '@/styles/variables.sass'

.nav 
  width: calc(100% - 60px)
  height: calc(100% - 60px)
  padding: 30px
  background-color: $black
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  a 
    color: $blue_light
    padding: 1rem 2rem
    margin-bottom: 1rem
    text-decoration: none
    background-color: $blue_dark
    border-radius: 2rem
    &.router-link-exact-active 
      background-color: $blue_light
      color: $blue_dark
</style>