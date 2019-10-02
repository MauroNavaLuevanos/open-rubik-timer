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
      div.modal.fade#edit-time-modal(
        tabindex="-1"
        role="dialog"
        v-if="timeSelected"
      )
        div.modal-dialog.modal-dialog-centered(role="document")
          div.modal-content
            div.modal-header
              h5.modal-title Edit Time
              button.close(
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              )
                span &times;
            div.modal-body
              div.py-3
                tag-icon.mr-4/
                | {{ timeSelected.id }}
              div.py-3
                box-icon.mr-4/
                | {{ timeSelected.cube }}
              div.py-3
                refresh-ccw-icon.mr-4/
                | {{ timeSelected.scramble }}
              div.py-3
                clock-icon.mr-4/
                span(v-html="timeSelected.getTime()")
              div.row.col-12.px-0
                div.py3.col-md-6
                  span.mr-4 +2
                  div.custom-control.custom-switch.d-inline-block
                    input.custom-control-input#plus2(type="checkbox")
                    label.custom-control-label(for="plus2")
                div.py3.col-md-6
                  span.mr-4 DNF
                  div.custom-control.custom-switch.d-inline-block
                    input.custom-control-input#dnf(type="checkbox")
                    label.custom-control-label(for="dnf")
            div.modal-footer.justify-content-between
              button.btn(type="button", data-dismiss="modal") Cancel
              div.row.mx-0
                button.btn.btn-white.mr-3(
                  type="button"
                  data-dismiss="modal"
                  @click="deleteTime(timeSelected.id)"
                )
                  span.text-danger
                    trash-icon/
                button.btn.btn-white
                  span.text-primary
                    save-icon/
      div.col-lg-3.col-md-4.col-6.px-1.mb-1(v-for="time in timesFilterd")
        div.card
          div.card-body
            div.d-flex.justify-content-between
              span {{ time.getDate() }}
              button.btn.float-right.p-0(
                data-target="#edit-time-modal"
                data-toggle="modal"
                @click="selectTime(time.id)"
              )
                edit-2-icon/
            p.text-center.h3.card-title.mb-0(v-html="time.getTime()")
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'
import {
  RefreshCcwIcon,
  ClockIcon,
  Edit2Icon,
  TrashIcon,
  SaveIcon,
  BoxIcon,
  EyeIcon,
  TagIcon
} from 'vue-feather-icons'

import CubeSelector from '@/components/shared/CubeSelector'

export default {
  name: 'History',
  data: () => (
    {
      timeSelected: null,
      filter: ''
    }
  ),
  components: {
    RefreshCcwIcon,
    CubeSelector,
    TrashIcon,
    ClockIcon,
    Edit2Icon,
    SaveIcon,
    EyeIcon,
    BoxIcon,
    TagIcon
  },
  methods: {
    ...mapActions({
      deleteTime: 'onDeleteTime'
    }),
    selectTime (id) {
      this.timeSelected = this.times.find(time => time.id === id)
    }
  },
  computed: {
    ...mapState({
      currentCube: 'currentCube',
      times: 'timesList'
    }),
    timesFilterd () {
      let list = this.times.filter(time => (
        time.getTime().includes(this.filter) ||
        time.scramble.toLowerCase().includes(this.filter.toLowerCase())
      ))
      let finalList = list.filter(time => (
        time.cube === this.currentCube
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
