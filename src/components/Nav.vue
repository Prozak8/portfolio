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
  justify-content: center
  align-items: center
  @media screen and (max-width: $breakpoint-md)
    flex-direction: row
    flex-wrap: wrap
  a 
    width: 3.5rem
    color: $blue_light
    padding: 0.75rem 1.5rem
    margin: 0.5rem    
    text-decoration: none       
    text-align: center
    background-color: $blue_dark
    border-radius: 2rem
    @media screen and (min-width: $breakpoint-md)
      width: 5rem
      margin: 1rem  
      padding: 1rem 1.75rem  

    &.router-link-exact-active 
      background-color: $blue_light
      color: $blue_dark
</style>
