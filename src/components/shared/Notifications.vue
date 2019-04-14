<template lang="pug">
  div.notifications-wrapper.px-3
    div.alert(
      v-for="notification in notifications"
      :class="`alert-${notification.type}`"
      v-html="notification.message"
    )
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'Notifications',
  computed: mapState(['notifications'])
}
</script>

<style lang="scss" scoped>
.notifications-wrapper {
  max-width: 20rem;
  position: fixed;
  z-index: 1050;
  bottom: 1rem;
  right: 0;
}
</style>
