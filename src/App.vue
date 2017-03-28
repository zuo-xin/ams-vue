<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <transition name="panel">
      <v-panel v-if="this.$store.state.panel"></v-panel>
    </transition>
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
import vPanel from './components/panels/panel.vue'
import vLoading from './components/loading.vue'
import vMask from './components/mask.vue'
import vHint from './components/hint.vue'
export default {
  name: 'app',
  components:{
    vHeader,
    Home,
    Setting,
    vPanel,
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
.panel-enter-active, .panel-leave-active {
  transition: margin-right .5s ease;
}
.panel-enter, .panel-leave-active {
  margin-right: -100%;
}
</style>
