<template lang="pug">
  .card
    header.card-header
      ul.tab-heads
        li.tab-head(
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
@import '@/styles/variables.sass'

.card 
  background-color: #fff
  @media screen and (min-width: $breakpoint-md)
    position: absolute
    min-height: 300px
    top: calc(50% - 125px)


.card-header 
  padding: 10px
  display: flex
  align-items: center
  justify-content: center
  padding: 8px

.tab-heads 
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  list-style: none

.tab-head 
  padding: 5px 18px
  border-radius: 4px
  position: relative
  cursor: pointer
  background-color: $blue_dark
  color: $blue_light
  margin: 4px

.tab-head--active 
  background-color: $blue_light
  color: $blue_dark
  transition: 0.4s
</style>
