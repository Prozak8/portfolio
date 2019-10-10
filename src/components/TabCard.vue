<template lang="pug">
  .card
    header.card__header
      ul.tabs
        li.tabs__tab(
          v-for="tab in tabs"
          :key="tab"
          v-bind:class="{'tab-head--active': activeTab === tab}"
          v-on:click="switchTab(tab)"
        )
          slot(:name="tabHeadSlotName(tab)") {{ tab }}
    main.card-body
      .tab-panel
        slot(:name="tabPanelSlotName")
</template>

<script>
export default {
  props: {
    initialTab: String,
    tabs: Array
  },
  data() {
    return {
      activeTab: this.initialTab
    };
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    }
  },
  methods: {
    tabHeadSlotName(tabName) {
      return `tab-head-${tabName}`;
    },

    switchTab(tabName) {
      this.activeTab = tabName;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/abstracts/_variables.sass'

.card 
  background-color: $color-white
  @media screen and (min-width: $breakpoint-md)
    position: absolute
    min-height: 30rem
    top: calc(50% - 12.5rem)
  @media screen and (min-width: $breakpoint-lg)
    display: flex

  &__header 
    padding: 1rem
    display: flex
    align-items: center
    justify-content: center
    padding: 1rem

.tabs
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  list-style: none
  @media screen and (min-width: $breakpoint-lg)
    justify-content: start
  &__tab
    font-size: 1.25rem
    text-align: center
    width: 7.5rem
    padding: .5rem 2rem
    border-radius: .5rem
    position: relative
    cursor: pointer
    background-color: $blue_dark
    color: $blue_light
    margin: .5rem
    transition: all .2s
    &:hover
      transform: translateY(-2px)
    &:active
      transform: translateY(0px)

.tab-head--active 
  background-color: $blue_light
  color: $blue_dark
  transition: .2s
</style>
