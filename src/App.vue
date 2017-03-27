<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-loading></v-loading>
    <v-mask></v-mask>
    <v-hint></v-hint>
  </div>

</template>

<script>
//require('./assets/common.css')
import './assets/common.css'
import vHeader from './components/header.vue'
import Home from './components/pages/home.vue'
import Setting from './components/pages/setting.vue'
import Approval from './components/pages/approval.vue'
import vLoading from './components/loading.vue'
import vMask from './components/mask.vue'
import vHint from './components/hint.vue'
export default {
  name: 'app',
  components:{
    vHeader,
    Home,
    Setting,
    Approval,
    vLoading,
    vMask,
    vHint
  }
}
</script>

<style>

#app{
  margin: 0;
  height: 100%;
  overflow: hidden;
  background-color: #eeeeee;
}
</style>
