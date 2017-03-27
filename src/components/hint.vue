<template>
 <div id="hint" v-if="this.$store.state.hint">{{this.$store.state.hint}}</div>
</template>

<style scoped>
#hint{
    text-align: center;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 200px;
    padding: 6px 8px;
    pointer-events: none;
    z-index: 1000;
    background: #d9edf7;
    border: #bce8f1;
    color: #31708f;
    line-height: 1.5;
    min-width: 200px;

    box-shadow: 0 0 6px 0 #bce8f1;
  }
</style>
