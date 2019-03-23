<template lang="pug">
  div.h-100.d-flex.flex-column#timer
    div.d-flex.py-3.container#scramble(v-if="scramble")
      div.d-flex.col-2.pr-3.pl-0
        select.custom-select(
          v-model="currentCube"
          @change="generateScramble(currentCube)"
        )
          option(
            :class="type.default ? 'selected' : null"
            v-for="type in cubeTypes"
            :value="type.type"
          ) {{ type.name }}
      p.w-100.px-3.text-center {{ scramble[0] }}
      div.pl-3
        button.btn.p-1#generate-scramble(@click="generateScramble()")
          refresh-ccw-icon/
    div.h-100.d-flex.align-items-center.justify-content-center.flex-column#clock
      p.py-3.mb-0#time {{ currentTime }}
      div.btn-group
        button.btn.px-3
          trash-icon/
        button.btn.px-3
          message-circle-icon/
        button.btn.px-3 &plus;2
        button.btn.px-3 DNF
</template>

<script>
import Scrambo from 'scrambo'
import {
  MessageCircleIcon,
  RefreshCcwIcon,
  TrashIcon
} from 'vue-feather-icons'

export default {
  name: 'Timer',
  components: {
    MessageCircleIcon,
    RefreshCcwIcon,
    TrashIcon
  },
  data: () => (
    {
      scramble: null,
      currentCube: '333',
      cubeTypes: [
        {
          type: '222',
          name: '2x2x2'
        },
        {
          type: '333',
          name: '3x3x3',
          default: true
        },
        {
          type: '444',
          name: '4x4x4'
        },
        {
          type: '555',
          name: '5x5x5'
        },
        {
          type: '666',
          name: '6x6x6'
        },
        {
          type: '777',
          name: '7x7x7'
        },
        {
          type: 'pyram',
          name: 'Pyraminx'
        },
        {
          type: 'minx',
          name: 'Megaminx'
        },
        {
          type: 'skewb',
          name: 'Skewb'
        },
        {
          type: 'sq1',
          name: 'Square-1'
        }
      ]
    }
  ),
  methods: {
    generateScramble () {
      this.scramble = new Scrambo().type(this.currentCube).get()
    }
  },
  mounted () {
    this.generateScramble()
  },
}
</script>

<style lang="scss" scoped>
#timer {
  transform: translate(0);
  #scramble {
    word-spacing: .5rem;
    font-size: 1.5rem;
  }
  #clock {
    #time {
      font-size: 5rem;
    }
  }
}
</style>
