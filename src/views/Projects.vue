<template lang="pug">
  .container
    .accordion(v-for="(project) in projects")
      img(:src="project.image" @click="show(project.id)")
      .panel(v-show="projectIndex === project.id") hasdasdasdasd
</template>

<script>
import plumcareLogo from "@/assets/plumcare-logo.png";
import spideradsLogo from "@/assets/spiderads-logo.svg";

export default {
  data() {
    return {
      plumcareLogo: plumcareLogo,
      spideradsLogo: spideradsLogo,
      projects: [
        { image: plumcareLogo, id: 0 },
        { image: spideradsLogo, id: 1 }
      ],
      projectIndex: 0
    };
  },
  methods: {
    show(id) {
      this.projectIndex = id;
    }
  }
};
</script>
<style lang="sass" scoped>
@import '@/styles/variables.sass'

.accordion
  width: 90%
  margin: auto
  border: solid 1px $black
  border-radius: 5px
  transition: 0.4s
  &:nth-child(1)
    margin-bottom: 2rem

  &__caret
    background-color: black
    width: 0.5rem
    height: 0.5rem
    transform: rotate(-45deg)

  img
    height: 4rem

  &__header
    font-size: 30px
</style>