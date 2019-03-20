<template lang="pug">
  div#app.d-flex.flex-column(:style="`color: ${color}`")
    router-view/
    main-menu/
</template>

<script>
import MainMenu from '@/components/shared/MainMenu'

export default {
  name: 'App',
  components: {
    'main-menu': MainMenu
  },
  computed: {
    color () {
      return this.$store.state.color
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/base';

#app {
  height: 100vh !important;
  overflow: hidden;
  a, p {
    color: currentColor;
  }
}
</style>
