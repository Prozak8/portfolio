<template lang="pug">
  .home
    .header__text-box
      img(
        :src="headshot" 
        alt="Picture of Zak"
        class="headshot"
      )
      h1.header-primary
        span.header-primary--main Zakary Howard
        span.header-primary--sub Frontend Developer

      .chat-box
        a(
          v-for="link in links"
          :key="link.id"
          :href="link.url"
          target="_blank"
        )
          font-awesome-icon(
            :icon="['fab', link.iconName]"
            size="3x"
            class="chat-box__icon grow"
          )

        a(href="mailto:zakary.howard94@gmail.com")
          font-awesome-icon(
            :icon="['fas', 'envelope']"
            size="3x"
            class="chat-box__icon grow"
          )
</template>

<script>
import headshot from "@/assets/headshot.png";

export default {
  data() {
    return {
      headshot: headshot,
      links: [
        { url: "https://github.com/Prozak8", iconName: "github-square", id: 0 },
        { url: "https://www.linkedin.com/in/zdh", iconName: "linkedin", id: 1 }
      ]
    };
  },
  components: {}
};
</script>
<style lang="sass" scoped>
@import '@/styles/variables.sass'

.home
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  padding: 3rem

.headshot
  width: 12.5rem
  border-radius: 50%
  animation: fadeIn 1s ease-out
  margin-bottom: 1.5rem
  @media screen and (min-width: $breakpoint-md)
    width: 17.5rem

.header__text-box
  text-align: center

.chat-box
  animation: moveInBottom .5s ease-out .75s
  animation-fill-mode: backwards
  &__icon
    color: $color-black
    margin: 0 .5rem

.header-primary 
  color: $color-black
  text-transform: uppercase
  line-height: 1.1
  margin-bottom: 1.5rem
  backface-visibility: hidden
  &--main 
    display: block
    font-size: 4rem
    font-weight: 400
    letter-spacing: 1rem
    margin-bottom: 1.5rem
    animation: moveInLeft 1s ease-out
  &--sub 
    display: block
    font-size: 2rem
    font-weight: 700
    letter-spacing: .75rem
    animation: moveInRight 1s ease-out
</style>