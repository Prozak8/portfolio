<template lang="pug">
  .about
    .about__inner.flex-col-center-center
      img(:src="headshot" alt="Picture of Zak")
      h1 Zakary Howard
      h2 Frontend Developer
      p Creative copywriter turned frontend developer in the fire and flames of
        a(
          v-popover:CA
          class="hyperlink"
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
import headshot from "@/assets/headshot.png";
import craftAcademyLogo from "@/assets/craft-academy-logo.png";

export default {
  data() {
    return {
      headshot: headshot,
      craftAcademyLogo: craftAcademyLogo,
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
    h2, p
      margin-bottom: 1rem
    h1
      font-size: 50px
    h2
      font-size: 30px
    img
      width: 15rem
      border-radius: 50%
  .social
    &__links_wrap
      display: flex
      flex-direction: row
    &__link
      color: $black
      padding-right: 5px
</style>