<template>
	<div id="loading">
   <div class="loading-content" v-if="this.$store.state.loading">
     <img src="../../static/loading.gif" alt="">
     <p class="info">loading...</p>
   </div>
  </div>
</template>

<style scoped>
  #loading{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .loading-content{
    position: absolute;
    width: 108px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
     -webkit-transform: translate(-50%,-50%);
     text-align: center;
    font-size: 16px;
    line-height: 16px;
    color: #666666;
    padding: 100px 0 20px;
    box-shadow: 0 0 0 3px #fff;
  }
</style>
