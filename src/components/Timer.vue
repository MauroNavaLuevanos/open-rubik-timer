<template lang="pug">
  div.h-100#timer
    p#clock {{ time }}
</template>

<script>
export default {
  name: 'Timer',
  data: () => (
    {
      time: '00'
    }
  )
}
</script>

<style lang="scss" scoped>
#timer {
  transform: translate(0);
  #clock {
    transform: translate(-50%, -50%);
    position: absolute;
    font-size: 2rem;
    left: 50%;
    top: 50%;
  }
}
</style>
