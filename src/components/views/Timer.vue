<template lang="pug">
  div.h-100#timer
    p#clock.my-0 {{ currentTime }}
</template>

<script>
export default {
  name: 'Timer',
  computed: {
    currentTime () {
      return this.$store.state.currentTime
    }
  }
}
</script>

<style lang="scss" scoped>
#timer {
  transform: translate(0);
  #clock {
    transform: translate(-50%, -50%);
    position: absolute;
    font-size: 5rem;
    left: 50%;
    top: 50%;
  }
}
</style>
