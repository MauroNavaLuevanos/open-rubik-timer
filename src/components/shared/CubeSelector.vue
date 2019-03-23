<template lang="pug">
  select.w-100.custom-select(:value="currentCube", @change="updateCube($event)")
    option(
      v-for="type in cubeTypes"
      :value="type.type"
    ) {{ type.name }}
</template>

<script>
export default {
  name: 'CubeSelector',
  data: () => (
    {
      cubeTypes: [
        {
          type: '222',
          name: '2x2x2'
        },
        {
          type: '333',
          name: '3x3x3'
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
  computed: {
    currentCube () {
      return this.$store.state.currentCube
    }
  },
  methods: {
    updateCube (event) {
      this.$store.commit('updateCube', event.target.value)
      this.$emit('update-cube')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
