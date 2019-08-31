<template>
  <div class="about">
    <div class="about__inner">
      <h1>Zakary Howard</h1>
      <p>Creative copywriter turned frontend developer in the fire and flames of @CraftAcademy.</p>
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

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.about
  background-color: $white
  height: 100%
  width: 100%
  &__inner
    padding: 20px
    h1, p
      margin-bottom: 1rem
  .social
    &__links_wrap
      display: flex
      flex-direction: row
    &__link
      color: $black
      padding-right: 5px
</style>