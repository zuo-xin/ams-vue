<template>
  <div class="home">
    <div class="leftMenu">
      <div class="title">首页</div>
      <router-link class="item" v-for="menu in menus" :to="menu.router">{{menu.title}}</router-link>
    </div>

    <router-view></router-view>

  </div>

</template>
<script>
import homeCheck from './home-check.vue'
import homeChecking from './home-checking.vue'
import homePass from './home-pass.vue'
import homeRefuse from './home-refuse.vue'
  export default{
    computed:{
      menus:function(){
        return this.$store.state.homeLeft;
      }
    },
    components:{
      homeCheck,
      homeChecking,
      homePass,
      homeRefuse
    }
  }
</script>

<style scoped>
.home{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 60px;
  overflow: auto;
  z-index: 1;
}
.leftMenu{
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  width: 170px;
  background-color: #394963;
  box-shadow: 0 0 10px #394963;
  overflow: auto;
  z-index: 1;
}
.title{
  padding: 10px 20px 10px 40px;
  color: #aaaaaa;
  font-size: 14px;
}
.item{
    display: block;
    color: white;
    line-height: 20px;
    padding: 10px 20px 10px 40px;
    background-repeat: no-repeat;
    background-position: 20px 50%;
    text-decoration: none;
}
.router-link-active{
  background-color: #272f3c;
}
</style>
