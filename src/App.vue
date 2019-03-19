<template lang="pug">
  div#app.d-flex.flex-column
    router-view/
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'assets/scss/base';

#app {
  height: 100vh !important;
}
</style>
