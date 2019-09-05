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
          .accordion-show__content {{ project.description }}
            .icon-wrap(class="mb-1")
              font-awesome-icon(
                v-for="icon in project.icons"
                :icon="[icon.pre, icon.suf]"
                size="2x"
                class="list-icon"
              )
            .carousel-view
              transition-group(
                class="carousel"
                tag="div"
              )
                div(
                  v-for="icon in project.icons"
                  class="slide"
                  :key="icon.suf"
                )
                  p {{ carouselTextHandler(icon.text) }}
              //- button(class="carousel-controls__button" @click="previous(project.id)") prev
              button(class="carousel-controls__button" @click="next(project.id)") next
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
      projects: [
        {
          image: plumcareLogo,
          id: 0,
          active: "vert-move vue",
          description:
            "From Figma design to production. A fully responsive website tested across the most popular browsers.",
          framework: "vuejs",
          icons: [
            { pre: "fab", suf: "html5", text: "1" },
            { pre: "fab", suf: "sass", text: "2" },
            { pre: "fas", suf: "mobile-alt", text: "3" }
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
            { pre: "fab", suf: "js-square", text: "4" },
            { pre: "fas", suf: "broadcast-tower", text: "5" }
          ]
        }
      ]
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
    },
    next(projectId) {
      const first = this.projects[projectId].icons.shift();
      this.projects[projectId].icons = this.projects[projectId].icons.concat(
        first
      );
    },
    carouselTextHandler(text, index) {
      return text;
      console.log(index);
    }
    // previous(projectId) {
    //   const last = this.slides.pop();
    //   this.slides = [last].concat(this.slides);
    // }
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
      padding-left: 3.5rem
      padding-right: 3.5rem
      text-align: center
    ul 
      list-style: none
      padding: 1rem 2rem
      li
        display: flex
        align-items: center
        .list-icon
          width: 2rem
          margin-right: 10px

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