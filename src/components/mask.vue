<template>
  <div id="mask" v-if="this.$store.state.mask"></div>
</template>

<style scoped>
#mask{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.6;
  z-index: 900;
}
</style>
