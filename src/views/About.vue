<template>
  <div class="about">
    <div class="about__inner">
      <h1>Zakary Howard</h1>
      <p>Creative copywriter turned frontend developer in the fire and flames of @CraftAcademy.</p>
      <p>I enjoy creating friendly user experiences and delivering good code quality, great documentation and clear communications between designer and programmer.</p>
    </div>
    <div class="social">
      <ul>
        <li>
          <a href="https://github.com/Prozak8" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/zdh" target="_blank">LinkedIn</a>
        </li>
      </ul>
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
    margin-top: auto

</style>