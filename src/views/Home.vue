<template>
  <div class="home"></div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style lang="sass" scoped>
@import '@/styles/variables.sass'

.home
  background-color: $white
  height: 100%
  width: 100%
</style>