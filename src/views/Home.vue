<template lang="pug">
  .flex-col-center-center.text-center.h-100
    img(:src="headshot" alt="Picture of Zak")
    h1 Zakary Howard
    h2 Frontend Developer
    p Want to chat? Drop me a line!
    a(href="mailto:zakary.howard94@gmail.com")
      font-awesome-icon(
        :icon="['fas', 'envelope']"
        size="2x"
        class="grow"
      )
</template>

<script>
import headshot from "@/assets/headshot.png";

export default {
  data() {
    return {
      headshot: headshot
    };
  },
  components: {}
};
</script>
<style lang="sass" scoped>
@import '@/styles/variables.sass'
h1
  font-size: 35px
  @media screen and (min-width: $breakpoint-md)
    font-size: 50px
h2
  font-size: 20px
  @media screen and (min-width: $breakpoint-md)
    font-size: 35px
img
  width: 12.5rem
  border-radius: 50%
  @media screen and (min-width: $breakpoint-md)
    width: 20rem
p
  margin-top: 3rem
svg
  color: $black

</style>