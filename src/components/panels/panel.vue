<template>
  <div id="panel" >
    <span class="close" @click="hidePanel()">×</span>
    <component v-bind:is="this.$store.state.currentPanel"></component>
  </div>
</template>
<script>
import homePanel from './homePanel.vue'

export default{
  data(){
    return {
      currentView:this.$store.state.currentPanel
    }
  },
  components:{
    homePanel
  },
  methods:{
    hidePanel:function(){
      this.$store.commit("hidePanel");
    }
  }
}
</script>
<style>
#panel{
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 0 6px #fff;
  background: #fff;
}
#panel .close{
  position: absolute;
  display: inline-block;
  color: white;
  text-shadow: none;
  font-size: 20px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1100;
}

</style>
