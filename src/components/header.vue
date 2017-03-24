<template>
<div id="header">
    <div class="top-menu">
     <!--  <router-link v-for="menu in menus" v-bind:to="menu.router">{{menu.title}}</router-link> -->
      <!-- <a v-for="menu in menus" v-bind:href="menu.router">{{menu.title}}</a> -->
      <router-link v-for="menu in menus" v-bind:to="menu.router">{{menu.title}}</router-link>
    </div>
    <div class="account">{{username}}</div>
  </div>

</template>


<script>
  export default {
      name: "header",
      data(){
        return{
            username:"",
            menus:[{title:"首页",router:"/home"},{title:"系统管理",router:"/setting"},{title:"审批管理",router:"/approval"}]
        }
      },
     mounted: function () {
          var that = this
          this.$http.post('/api/api/api/loginInfo')
            .then(function(res) {
              var menuObj = res.data.data.list.username;
              that.username = res.data.data.list.truename;
            })
            .catch(function(error) {
              return "暂无数据"
            });
        }

  }
</script>


<style scoped>
  #header{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 60px;
    font-size: 16px;
    background-color: #202f44;
    box-shadow: 0 0 10px #202f44;
    background-image: url(../../static/logo.png);
    background-repeat: no-repeat;
    background-position: 35px 50%;
    padding: 0 35px 0 185px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  }
  .top-menu{
    height: 60px;
    line-height: 60px;
    display: flex;
  }
  .top-menu>a{
    width:100px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #fff;
  }
  .account{
    height: 60px;
    line-height: 60px;
    color: #fff;
  }
  .router-link-active{
    border-bottom: 4px solid #ffb500;
  }
</style>
