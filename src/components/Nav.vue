<template lang="pug">
  .nav
    router-link(
      v-for="route in routes" 
      :key="route.name"
      :to="route.route"
      class="btn"
    ) {{ route.name }}
</template>

<script>
export default {
  name: "Navigation",
  props: {
    routes: Array
  }
};
</script>

<style scoped lang="sass">
@import '@/styles/abstracts/_variables.sass'

.nav 
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center
  padding: 1rem
  @media screen and (min-width: $breakpoint-md)
    flex-direction: column

  .btn:link,
  .btn:visited
    width: 10rem
    font-size: 1.5rem
    color: $blue_light
    padding: .75rem 2rem
    margin: .5rem
    text-decoration: none       
    text-align: center
    background-color: $blue_dark
    border-radius: 2rem
    transition: all .2s
    &:hover
      transform: translateY(-2px)
    &:active
      transform: translateY(0px)
    @media screen and (min-width: $breakpoint-md)
      width: 12.5rem
      font-size: 1.75rem
      margin: .75rem

    &.router-link-exact-active 
      background-color: $blue_light
      color: $blue_dark
</style>
