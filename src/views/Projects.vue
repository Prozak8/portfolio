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
          .accordion-show__content 
            p {{ project.description }}
            .icon-wrap
              font-awesome-icon(
                v-for="icon in project.icons"
                :key="icon.suf"
                @click="carouselTextHandler(icon.id)"
                :icon="[icon.pre, icon.suf]"
                size="2x"
                :class="[{'active': icon.text === carouselText}, 'icon grow']"
              )
            .carousel-view
              .slide {{ carouselText }}
              //- button(class="carousel-controls__button" @click="previous(project.id)") prev
              //- button(class="carousel-controls__button" @click="next(project.id)") next
</template>
np
<script>
import plumcareLogo from "@/assets/plumcare-logo.png";
import spideradsLogo from "@/assets/spiderads-logo.svg";

export default {
  data() {
    return {
      plumcareLogo: plumcareLogo,
      spideradsLogo: spideradsLogo,
      projectIndex: null,
      carouselText: "",
      projects: [
        {
          image: plumcareLogo,
          id: 0,
          active: "vert-move vue",
          description:
            "From Figma design to production. A fully responsive website tested across the most popular browsers.",
          framework: "vuejs",
          icons: [
            {
              pre: "fab",
              suf: "html5",
              text: "Extensive use of html elements.",
              id: "0"
            },
            {
              pre: "fab",
              suf: "sass",
              text: "Extensive use of mixins, variables and css properties.",
              id: "1"
            },
            {
              pre: "fab",
              suf: "bootstrap",
              text:
                "Used almost all of vue-bootstrap components and very familiar with their helper classes.",
              id: "2"
            },
            {
              pre: "fas",
              suf: "mobile-alt",
              text:
                "Responsive, mobile first design all the way to extra large screens.",
              id: "3"
            }
          ]
        },
        {
          image: spideradsLogo,
          id: 1,
          active: "spin react",
          description:
            "SpiderAds is an automated advertising software that uses AI to effectively post digital ads through social media and Swedish news outlets. My role was to enhance the dashboard and display information in a more user friendly manner.",
          framework: "react",
          icons: [
            {
              pre: "fab",
              suf: "js-square",
              text:
                "Extensive use of TypeScript definitions for components, functions and interfaces.",
              id: "0"
            },
            {
              pre: "fas",
              suf: "broadcast-tower",
              text: "Working mostly with API data.",
              id: "1"
            }
          ]
        }
      ]
    };
  },
  methods: {
    show(id) {
      (this.projectIndex = id), this.carouselTextHandler();
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
    },
    next(projectId) {
      const first = this.projects[projectId].icons.shift();
      this.projects[projectId].icons = this.projects[projectId].icons.concat(
        first
      );
    },
    carouselTextHandler(iconId) {
      if (iconId) {
        this.carouselText = this.projects[this.projectIndex].icons[iconId].text;
      } else {
        this.carouselText = this.projects[this.projectIndex].icons[0].text;
      }
    },
    // previous(projectId) {
    //   const last = this.slides.pop();
    //   this.slides = [last].concat(this.slides);
    // }
    activeIcon(text, hexcode) {
      return text === this.carouselText
        ? "transform: scale(1.1); color: " + hexcode
        : "";
    }
  },

  computed: {}
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
      padding: 1rem 3.5rem
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      p
        padding-bottom: 1rem
      .icon-wrap
        width: auto
        padding-bottom: 1rem
        .icon
          padding: 0 0.25rem

      .carousel-view
        .slide


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

.active 
  color: $blue_medium
  transform: scale(1.1)
  
</style>