<template lang="pug">
  .container
    .accordion(v-for="project in projects")
      .title
        .col-icon
          font-awesome-icon(
            :icon="['fab', `${project.framework}`]" 
            @click="show(project.id)"
            size="3x"
          )
        .col-content
          img(:src="project.image")
      .panel(v-show="projectIndex === project.id") {{ project.desc_short }}
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
        {
          image: plumcareLogo,
          id: 0,
          desc_short:
            "From Figma design to production. A fully responsive website tested across the most popular browsers.",
          framework: "vuejs"
        },
        {
          image: spideradsLogo,
          id: 1,
          desc_short:
            "Data visualization for an digital advertising one-stop-shop.",
          framework: "react"
        }
      ],
      projectIndex: null
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

  .col-icon
    padding: 8px
    background-color: grey
    min-width: 3.25rem
  .col-content
    margin: 0 auto

  .title
    display: flex

  img
    height: 4rem

  &__header
    font-size: 30px
</style>