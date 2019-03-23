<template lang="pug">
  div.h-100#page-not-found
    p.text-center.error-code 404
      span.h6.d-block This Page Doesn't Exist
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
#page-not-found {
  transform: translate(0);
}
</style>
