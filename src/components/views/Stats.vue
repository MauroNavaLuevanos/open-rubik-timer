<template lang="pug">
  div#stats.h-100
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'Stats',
  computed: mapState({times: 'timesList'})
}
</script>
