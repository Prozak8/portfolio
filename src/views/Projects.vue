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
            a(:href="project.path" target="_blank") Homepage
            .icon-wrap
              font-awesome-icon(
                v-for="icon in project.icons"
                :key="icon.suf"
                @click="carouselTextHandler(icon.id)"
                :icon="[icon.pre, icon.suf]"
                size="2x"
                :class="[icon.text === carouselText ? 'grow-active' : 'grow', 'icon']"
              )
            .carousel-view
              .slide {{ carouselText }}
    h4(
      href="https://github.com/Prozak8" 
      target="_blank"
      class="hyperlink"
      style="margin-top: auto; text-align: center;"
      ) See more on GitHub
</template>

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
            "Working with a graphic designer to deliver an entire website for a healthcare company based in Silicon Valley. Fully responsive through all browsers and devices.",
          framework: "vuejs",
          path: "https://stage.plumcare.ixlayer.com/en/home",
          icons: [
            {
              pre: "fab",
              suf: "bootstrap",
              text:
                "Used majority of vue-bootstrap components and developed deep understanding of their helper classes.",
              id: "0"
            },
            {
              pre: "fas",
              suf: "mobile-alt",
              text:
                "Responsive, mobile first design all the way to extra large screens.",
              id: "1"
            },
            {
              pre: "fab",
              suf: "html5",
              text:
                "Developed a deep understanding of html elements and properties.",
              id: "2"
            },
            {
              pre: "fab",
              suf: "sass",
              text: "Extensive use of mixins, variables and css properties.",
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
          path: "https://spiderads.eu",
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
      if (id === this.projectIndex) {
        this.projectIndex = null;
      } else (this.projectIndex = id), this.carouselTextHandler();
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
    carouselTextHandler(iconId) {
      if (iconId) {
        this.carouselText = this.projects[this.projectIndex].icons[iconId].text;
      } else {
        this.carouselText = this.projects[this.projectIndex].icons[0].text;
      }
    }
    // activeIcon(text, hexcode) {
    //   return text === this.carouselText
    //     ? "transform: scale(1.1); color: " + hexcode
    //     : "";
    // }
  }
};
</script>
<style lang="sass" scoped>
@import '@/styles/variables.sass'

.container 
  display: flex
  flex-direction: column
  .accordion
    width: 90%
    margin: 0 auto
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
        p, a
          text-align: center
          padding-bottom: 1rem
        .icon-wrap
          width: auto
          padding-bottom: 1rem
          .icon
            padding: 0 0.25rem
        .carousel-view
          max-width: 250px
          text-align: center
          .slide
            font-size: 14px
            font-style: italic

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