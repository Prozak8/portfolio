<template lang="pug">
  .about
    tab-card(
      :tabs="tabs"
      :initialTab="initialTab"
    )
      template(slot="tab-head-who") who
      template(slot="tab-panel-who")
        p.paragraph
          | A young, English / Swedish frontend developer living in Gothenburg. I speak both languages fluently and can even hold a small conversation in Greek. I was born in Kuwait, completed primary school in England, highschool in Cyprus and university in the UK. I go to Thai Boxing classes twice a week, the gym the days I don't and am a very good cook. I enjoy going to tech meetups and design / code a personal project as well.
      template(slot="tab-head-what") what
      template(slot="tab-panel-what")
        p.paragraph
          | I studied creative advertising and underwent many internships in some of London's most prestigious advertising agencies. My role was to deliver ideas for advertising campaigns with my specialization being copywriting. Concentrated and rich content that delivers a message effectively. I then moved to Sweden where I worked in construction specializing in concrete and steel. It was during this job that I found an interest in tech.
      template(slot="tab-head-why") why
      template(slot="tab-panel-why")
        p.paragraph
          | During my time in construction I read Wired articles daily. I became fascinated with how fast technology was developing and felt it was crazy not to be a part of the growing industry. What pushed me to do a coding bootcamp was seeing the Falcon X's first launch. Since then, I have never regretted my decision.
      template(slot="tab-head-when") when
      template(slot="tab-panel-when")
        p.paragraph
          | So far I have been programming for a year. Seven months in a professional capacity. I am currently building an entire website for a client in the Silicon Valley. I have worked with a client in Stockholm, presenting API data in a dashboard to monitor advertising spend and reach. It's funny to think how much I've grown since I started.
      template(slot="tab-head-where") where
      template(slot="tab-panel-where")
        p.paragraph
          | I have a very diverse cultural background. I have been uprooted countless times in my life. It is not the easiest but has given me a broad view on the world and the people that live in it. I adapt easily because of this. 
</template>

<script>
import TabCard from "@/components/TabCard.vue";
export default {
  components: {
    TabCard
  },
  data() {
    return {
      initialTab: "who",
      tabs: ["who", "what", "why", "when", "where"]
    };
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.about
  height: 100%
  width: 100%
  display: flex
  flex-direction: column
  .social
    &__links_wrap
      display: flex
      flex-direction: row
    &__link
      color: $color-black
      padding-right: .5rem
.paragraph
  font-size: 1.5rem
  padding: 1rem 2.5rem
</style>