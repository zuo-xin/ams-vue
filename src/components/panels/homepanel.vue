<template>
  <div class="homePanel">
    <div class="title">借款编号：{{title}}</div>
    <div class="content"></div>
    <div class="bottom"></div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        title:""
      }
    }
  }
</script>
<style scoped>
  .homePanel{
    width: 960px;
  }
  .homePanel .title{
    width: 100%;
    background-color: #ffb516;
    font-size: 14px;
    line-height: 40px;
    padding-left: 20px;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
  }
  .content{
    width: 100%;
  }
  .bottom{
    border-top: 1px solid #ededed;
    width: 100%;
    padding: 20px 40px;
    background-color: #fafafa;
    position: absolute;
    bottom: 0;
  }
</style>
