<template lang="pug">
  .container
    .accordion(v-for="project in projects")
      .row
        .caret-wrap
          font-awesome-icon(
            :class="[projectIndex === project.id ? project.active : '']"
            :icon="['fab', `${project.framework}`]" 
            @click="show(project.id)"
            size="3x"
          )
        .col-content
          img(:src="project.image")
      transition(name="fade"
        v-on:before-enter="beforeEnter" v-on:enter="enter"
        v-on:before-leave="beforeLeave" v-on:leave="leave"
      )
        .accordion-show(v-if="projectIndex === project.id")
          .accordion-show__content {{ project.desc_short }}
            ul
              li(v-for="icon in project.icons")
                font-awesome-icon(
                  class="mb-1"
                  :icon="[icon.pre, icon.suf]"
                  size="2x"
                )
                p hello
            
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
          active: "vert-move vue",
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
          active: "spin react",
          desc_short:
            "SpiderAds is an automated advertising software that uses AI to effectively post digital ads through social media and Swedish news outlets. My role was to enhance the dashboard and display information in a more user friendly manner.",
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
    },
    beforeEnter(el) {
      el.style.height = "0";
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave(el) {
      el.style.height = "0";
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

  &-show
    transition: 300ms ease-out
    overflow: hidden

    &__content
      display: flex
      flex-direction: column

  .caret-wrap
    width: 3.25rem
    position: absolute
    padding-left: 5px

  .col-content
    margin: 0 auto

  .row
    display: flex
    align-items: center

  img
    height: 4rem
</style>