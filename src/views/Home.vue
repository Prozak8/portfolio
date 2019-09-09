<template lang="pug">
  .flex-col-center-center.text-center.h-100
    img(:src="headshot" alt="Picture of Zak")
    h1 Zakary Howard
    h2 Frontend Developer
</template>

<script>
import headshot from "@/assets/headshot.png";

export default {
  data() {
    return {
      headshot: headshot
    };
  },
  components: {}
};
</script>
<style lang="sass" scoped>
@import '@/styles/variables.sass'
h1
  font-size: 50px
h2
  font-size: 30px
img
  width: 20rem
  border-radius: 50%

</style>