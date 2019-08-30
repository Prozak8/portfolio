<template>
  <div class="about">
    <div class="about__inner">
      <h1>Zakary Howard</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio illo, maxime sed quia laboriosam nisi impedit delectus animi praesentium unde!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa, ipsum facilis asperiores nostrum provident fugit nemo alias exercitationem, nisi molestias quos quis officia nulla magnam obcaecati aspernatur, quasi doloribus!</p>
    </div>
    <div class="social">
      <ul>
        <li>
          <a href>Github</a>
        </li>
        <li>
          <a href>LinkedIn</a>
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