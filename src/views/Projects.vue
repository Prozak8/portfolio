<template lang="pug">
  .container
    .accordion(v-for="project in projects")
      .row
        .col-icon
          font-awesome-icon(
            :class="projectIndex === project.id ? project.active : ''"
            :icon="['fab', `${project.framework}`]" 
            @click="show(project.id)"
            size="3x"
          )
        .col-content
          img(:src="project.image")
      .row.accordion__show(v-show="projectIndex === project.id")
        .col-icon.flex-col
          font-awesome-icon(
            v-for="icon in project.icons"
            class="mb-1"
            :icon="[`${icon.pre}`, `${icon.suf}`]"
            size="3x"
          )
        .col-content {{ project.desc_short }}
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
          active: "vert-move",
          desc_short:
            "From Figma design to production. A fully responsive website tested across the most popular browsers.",
          framework: "vuejs",
          icons: [
            { pre: "fab", suf: "html5" },
            { pre: "fab", suf: "sass" },
            { pre: "fas", suf: "mobile-alt" }
          ]
        },
        {
          image: spideradsLogo,
          id: 1,
          active: "spin",
          desc_short:
            "Data visualization for an digital advertising one-stop-shop.",
          framework: "react",
          icons: [
            { pre: "fab", suf: "js-square" },
            { pre: "fas", suf: "broadcast-tower" }
          ]
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
  &:nth-child(1)
    margin-bottom: 2rem

  .col-icon
    padding: 8px
    background-color: grey
    width: 3.25rem
  .col-content
    margin: 0 auto

  .row
    display: flex

  img
    height: 4rem
  
  .flex-col
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

</style>