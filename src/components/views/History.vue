<template lang="pug">
div.h-100#times-history
  div.container.w-100.py-3.sticky-top.bg-white.d-flex.flex-wrap.flex-md-nowrap
    div.col-md-2.pl-md-0.mb-3
      cube-selector/
    div.w-100
      input.form-control.w-100(
        v-model="filter"
        placeholder="Search Time, Scramble"
      )
  div.container.row.mx-auto.py-4
    div.col-12.alert.alert-info(v-if="!times.length")
      strong.text-uppercase start cubing:
      span You dont' have solves
    div.col-12.alert.alert-info(
      v-if="!timesFilterd.length && times.length"
    ) Results with this filter not found
    div.col-lg-3.col-md-4.col-6.px-1.mb-1(v-for="time in timesFilterd")
      div.card
        div.card-body
          div.d-flex.justify-content-between
            span {{ time.date }}
            button.btn.float-right.p-0
              edit-2-icon/
          p.text-center.h3.card-title.mb-0(v-html="time.transformedTime")
</template>

<script>
import {
  Edit2Icon,
  EyeIcon
} from 'vue-feather-icons'

import CubeSelector from '@/components/shared/CubeSelector'

export default {
  name: 'History',
  data: () => (
    {
      filter: ''
    }
  ),
  components: {
    CubeSelector,
    Edit2Icon,
    EyeIcon
  },
  computed: {
    times () {
      return this.$store.state.timesList
    },
    timesFilterd () {
      let list = this.$store.state.timesList.filter(time => (
        time.transformedTime.includes(this.filter) ||
        time.scramble.toLowerCase().includes(this.filter.toLowerCase())
      ))
      let finalList = list.filter(time => (
        time.cube === this.$store.state.currentCube
      ))
      return finalList
    }
  }
}
</script>

<style lang="scss" scoped>
#times-history {
  overflow-y: auto !important;
}
</style>
