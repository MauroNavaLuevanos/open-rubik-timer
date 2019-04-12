<template lang="pug">
  div#app.d-flex.flex-column(:style="`color: ${color}`")
    loading/
    router-view/
    main-menu/
</template>

<script>
import MainMenu from '@/components/shared/MainMenu'
import Loading from '@/components/shared/Loading'

export default {
  name: 'App',
  components: {
    'main-menu': MainMenu,
    Loading
  },
  mounted () {
    window.onload = () => {
      setTimeout(() => {
        this.$store.commit('updateLoadingPage', false)
      }, 1000)
    }
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
