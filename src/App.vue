<template lang="pug">
  div#app.d-flex.flex-column(:style="`color: ${color}`")
    loading/
    notifications/
    router-view/
    main-menu/
</template>

<script>
import {
  mapMutations,
  mapState
} from 'vuex'

import Notifications from '@/components/shared/Notifications'
import MainMenu from '@/components/shared/MainMenu'
import Loading from '@/components/shared/Loading'

export default {
  name: 'App',
  components: {
    'main-menu': MainMenu,
    Notifications,
    Loading
  },
  methods: {
    ...mapMutations([
      'updateLoadingPage',
      'setTimes'
    ])
  },
  mounted () {
    const localTimes = window.localStorage.getItem('times')
    if (!localTimes) {
      window.localStorage.setItem('times', JSON.stringify([]))
    } else {
      this.setTimes(JSON.parse(localTimes))
    }

    window.onload = () => {
      setTimeout(() => {
        this.updateLoadingPage(false)
      }, 1000)
    }
  },
  computed: mapState(['color'])
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
