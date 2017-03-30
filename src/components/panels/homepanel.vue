<template>
  <div class="homePanel">
    <div class="title">借款编号：{{title}}</div>
    <div class="content">
      <div class="top">
        <div class="top-item">
          <div class="item-left"><span class="title">动车宝-按揭车(先息后本)ㆍ展期</span><span class="status">面审预审</span></div>
          <div class="item-right"><span class="time">3个月</span><span class="money">20.00万元</span></div>
        </div>
        <div class="item">借款编号：JK201703101653389531</div>
      </div>
    </div>
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
    top: 40px;
    position: absolute;
    position: absolute;
    top: 40px;
    bottom: 103px;
    overflow-y: auto;
    overflow-y: overlay;
  }
  .content .top{
    margin:0 40px;
    display: flex;
    flex-direction:
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
