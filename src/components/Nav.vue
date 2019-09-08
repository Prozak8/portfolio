<template lang="pug">
  .nav
    router-link(
      v-for="route in routes" 
      :key="route.name"
      :to="route.route"
    ) {{ route.name }}
</template>

<script>
export default {
  name: "Navigation",
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

<style scoped lang="sass">
@import '@/styles/variables.sass'

.nav 
  display: flex
  flex-direction: column
  justify-self: center
  align-items: center
  @media screen and (max-width: $breakpoint-md)
    flex-direction: row
  a 
    width: 3.5rem
    color: $blue_light
    padding: 1rem 2rem
    margin-bottom: 1rem
    text-decoration: none
    text-align: center
    background-color: $blue_dark
    border-radius: 2rem
    @media screen and (max-width: $breakpoint-md)
      margin-bottom: 0
      margin-left: 0.5rem
      margin-right: 0.5rem
    &.router-link-exact-active 
      background-color: $blue_light
      color: $blue_dark
</style>