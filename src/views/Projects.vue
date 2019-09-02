<template lang="pug">
  .container
    .card
      img(:src="plumcareLogo")
    .card
      img(:src="spideradsLogo")
</template>

<script>
import plumcareLogo from "@/assets/plumcare-logo.png";
import spideradsLogo from "@/assets/spiderads-logo.svg";

export default {
  data() {
    return {
      plumcareLogo: plumcareLogo,
      spideradsLogo: spideradsLogo
    };
  },
  components: {}
};
</script>
<style lang="sass" scoped>
@import '@/styles/variables.sass'

.card
  width: 90%
  margin: auto
  border: solid 1px $black
  border-radius: 5px
  &:nth-child(1)
    margin-bottom: 2rem
  
  img
    height: 4rem

  &__header
    font-size: 30px
</style>