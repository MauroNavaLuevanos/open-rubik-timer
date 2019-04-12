<template lang="pug">
  div.loading.w-100.fixed-top.bg-white.d-flex.align-items-center.justify-content-center(
    :class="loadingPage ? null : 'loaded'"
  )
    div.cube.d-flex.flex-wrap
      span.cube-piece.bg-white(v-for="i in 9")
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'Loading',
  computed: mapState([
    'loadingPage'
  ])
}
</script>

<style lang="scss" scoped>
$cube-piece-size: 2rem;

@keyframes spin {
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
}

.loading {
  transition: all 300ms ease;
  height: 100vh;
  z-index: 1000;
  &.loaded {
    top: 100%;
  }
  .cube {
    animation: 1s spin infinite linear;
    width: calc(#{$cube-piece-size * 3} + 3px);
    .cube-piece {
      box-shadow: 0 0 25px rgba(#000, .25);
      border: 1px solid currentColor;
      height: $cube-piece-size;
      width: $cube-piece-size;
      border-radius: 5px;
    }
  }
}
</style>
