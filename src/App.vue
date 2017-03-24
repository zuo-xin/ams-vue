<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>

  </div>
</template>

<script>
import vHeader from './components/header.vue'
import Home from './components/pages/home.vue'
import Setting from './components/pages/setting.vue'
import Approval from './components/pages/approval.vue'

export default {
  name: 'app',
  components:{
    vHeader,
    Home,
    Setting,
    Approval
  }
}
</script>

<style >
@import './assets/common.css'
#app{
  margin: 0;
  height: 100%;
  overflow: hidden;
  background-color: #eeeeee;
}
</style>
