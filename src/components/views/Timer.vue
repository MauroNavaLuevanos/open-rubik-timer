<template lang="pug">
  div.h-100.d-flex.flex-column#timer
    div.d-flex.py-3.container#scramble(v-if="scramble")
      div.col-2.pr-3.pl-0
          cube-selector(@update-cube="generateScramble")/
      p.w-100.px-3.text-center {{ scramble[0] }}
      div.pl-3.pr-0
        button.btn.p-1#generate-scramble(@click="generateScramble()")
          refresh-ccw-icon/
    div.h-100.d-flex.align-items-center.justify-content-center.flex-column#clock
      p.py-3.mb-0.time(
        v-show="!runningTime"
        @click="switchTimer"
        v-html="lastTime"
      )
      p.py-3.mb-0.time(
        v-show="runningTime"
        @click="switchTimer"
        v-html="transformedTime"
      )
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

import CubeSelector from '@/components/shared/CubeSelector'

class Time {
  constructor (time, transformedTime, cube, scramble, date) {
    this.time = time
    this.transformedTime = transformedTime
    this.cube = cube
    this.scramble = scramble
    this.date = date
  }
}

export default {
  name: 'Timer',
  components: {
    MessageCircleIcon,
    RefreshCcwIcon,
    CubeSelector,
    TrashIcon
  },
  data: () => (
    {
      scramble: null,
      time: 0,
      lastTime: '0<small>s<small>',
      runningTime: false
    }
  ),
  methods: {
    generateScramble () {
      this.scramble = new Scrambo().type(this.currentCube).get()
      this.time = 0
    },
    switchTimer () {
      let today = new Date()
      if (this.runningTime) {
        this.runningTime = false
        this.lastTime = this.transformedTime
        this.$store.commit('pushTime', new Time(
          this.time * 100,
          this.transformedTime,
          this.currentCube,
          this.scramble[0],
          `${today.getFullYear()}/${today.getMonth() + 1}`
        ))
        this.time = 0
        this.generateScramble()
      } else if (!this.runningTime) {
        this.time = 0
        this.runningTime = true
      }
    },
  },
  mounted () {
    setInterval(() => this.time++, 100)
    this.generateScramble()
  },
  computed: {
    transformedTime () {
      let transformed = ''
      let current = new Date(this.time * 100)
      current.getMinutes() ? transformed += `${current.getMinutes()}:` : {}
      transformed += current.getSeconds()
      transformed += `.${current.getMilliseconds() / 100}`
      return transformed += '<small>s</small>'
    },
    currentCube () {
      return this.$store.state.currentCube
    }
  }
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
    .time {
      text-align: center;
      cursor: pointer;
      font-size: 5rem;
      width: 100%;
    }
  }
}
</style>
