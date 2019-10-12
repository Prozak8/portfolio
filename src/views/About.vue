<template lang="pug">
  .about
    tab-card(
      :tabs="json.about.map(item => item.tab_header)"
      :initialTab="json.about[0].tab_header"
    )
      template(
        v-for="(item, i) in json.about"
        :slot="`tab-head-${item.tab_header}`"
      ) {{ item.tab_header }}
      template(
        v-for="(item, i) in json.about"
        :slot="`tab-panel-${item.tab_header}`"
      )
        p.paragraph
          | {{ item.paragraph }}

</template>

<script>
import TabCard from "@/components/TabCard.vue";
import json from "./paragraph.json";

export default {
  components: {
    TabCard
  },
  data() {
    return {
      json: json
    };
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/abstracts/_variables.sass'

.about
  height: 100%
  width: 100%
  display: flex
  flex-direction: column
.paragraph
  font-size: 1.5rem
  padding: 1rem 2.5rem
</style>