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
      p.py-3.mb-0#time(v-if="!runningTime", @click="startTimer") {{ lasttime }}
      p.py-3.mb-0#time(v-else, @click="stopTimer") {{ transformedTime }}
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
      lasttime: '0:0',
      runningTime: false
    }
  ),
  methods: {
    generateScramble () {
      this.scramble = new Scrambo().type(this.currentCube).get()
      this.time = 0
    },
    startTimer () {
      this.runningTime = true
      setInterval(() => {
        this.time++
      }, 100)
    },
    stopTimer () {
      let today = new Date()
      this.runningTime = false
      this.lasttime = this.transformedTime
      this.$store.commit('pushTime', new Time(
        this.time * 100,
        this.transformedTime,
        this.currentCube,
        this.scramble[0],
        `${today.getFullYear()}/${today.getMonth() + 1}`
      ))
      clearInterval(this.time)
      this.time = 0
      this.generateScramble()
    }
  },
  mounted () {
    this.generateScramble()
  },
  computed: {
    transformedTime () {
      let current = new Date(this.time * 100)
      return `${current.getMinutes()}:${current.getSeconds()}.${current.getMilliseconds() / 100}`
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
    #time {
      font-size: 5rem;
    }
  }
}
</style>
