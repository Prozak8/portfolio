<template>
  <div class="about">
    <div class="about__inner">
      <img :src="headshot" alt="zak" />
      <h1>Zakary Howard</h1>
      <h2>Frontend Developer</h2>
      <p>
        Creative copywriter turned frontend developer in the fire and flames of
        <a
          href="https://www.craftacademy.se"
          target="_blank"
          class="hyperlink"
        >@CraftAcademy.</a>
      </p>
      <p>I enjoy creating friendly user experiences and delivering good code quality, great documentation and clear communications between designer and programmer.</p>
    </div>
    <div class="social">
      <a href="https://github.com/Prozak8" target="_blank" class="social__link">
        <font-awesome-icon :icon="['fab', 'github-square']" size="3x" class="grow" />
      </a>
      <a href="https://www.linkedin.com/in/zdh" target="_blank" class="social__link">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" class="grow" />
      </a>
    </div>
  </div>
</template>

<script>
import headshot from "@/assets/headshot.png";
export default {
  data() {
    return {
      headshot: headshot
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