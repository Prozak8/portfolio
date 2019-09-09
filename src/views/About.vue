<template lang="pug">
  .about
    .about__inner.flex-col-center-center
      p Creative copywriter turned frontend developer in the fire and flames of
        a(
          v-popover:CA
          class="hyperlink orange"
        )  @CraftAcademy.
      p I enjoy creating friendly user experiences and delivering good code quality, great documentation and clear communications between designer and programmer. 
      .social
        a(
          v-for="link in links"
          :key="link.id"
          :href="link.url"
          target="_blank" 
          class="social__link"
        )
          font-awesome-icon(
            :icon="['fab', link.iconName]"
            size="3x"
            class="grow"
          )
    popover(name="CA") 
      a(href="https://www.craftacademy.se/") Fullstack development bootcamp in Göteborg. 
        font-awesome-icon(
          :icon="['fas', 'chevron-right']"
          size="1x"
        )
      
</template>

<script>
export default {
  data() {
    return {
      links: [
        { url: "https://github.com/Prozak8", iconName: "github-square", id: 0 },
        { url: "https://www.linkedin.com/in/zdh", iconName: "linkedin", id: 1 }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.about
  background-color: $white
  height: 100%
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  &__inner
    padding: 40px
    p
      margin-bottom: 1rem
      text-align: center
  .social
    &__links_wrap
      display: flex
      flex-direction: row
    &__link
      color: $black
      padding-right: 5px
</style>