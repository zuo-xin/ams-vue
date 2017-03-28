<template>
<div class="page">
  <form clsss="form-search">
    <input type="text" class="inp search-inp"  placeholder="借款人姓名/身份证号">
    <button class="button s-button" type="submit">查询</button>
  </form>
  <table class="table">
    <thead>
      <tr>
        <th>贷款编号</th>
        <th>借款人姓名</th>
        <th>身份证号</th>
        <th>产品</th>
        <th>申请金额（元）</th>
        <th>借款期限</th>
        <th>创建时间</th>
        <th>流程状态</th>
      </tr>
    </thead>
    <tbody v-html="homeData" v-on:click="showHomePanel($event)">

    </tbody>
  </table>
</div>

</template>
<script>
  export default{
    data(){
      return{
        homeData:"",
        pmsg:"aaa"
      }
    },
    created  (){
        this.getData();
    },
    methods:{
      getData:function(){
        var that = this;
        this.$store.commit('showLoading');
        this.$http.post('/api/credit/income/search', {
          loanincome:{
            check_status: "checking"
          },
          currentpage:1,
          pagenum:20
        })
        .then(function(res) {
          if(res.data.data.list.loanincome.length){
            var attr = res.data.data.attributes.loanincome,
                data = res.data.data.list.loanincome,
                _html="";
           for(var i=0;i<data.length;i++){
              _html += '<tr class="selectData" data-id="'+data[i].id+'">\
                          <td>'+data[i].id+'</td>\
                          <td>' + data[i].realname + '</td>\
                          <td>' + data[i].id_card + '</td>\
                          <td>' + data[i].product_name + '</td>\
                          <td>' + that.util.moneyFormat(data[i].credit_money, true) + '</td>\
                          <td>' + data[i].duetime + (attr.duetime_type.stype[data[i].duetime_type] ? attr.duetime_type.stype[data[i].duetime_type] : '') + '</td>\
                          <td>' + that.util.formatTime(data[i].addtime) + '</td>\
                          <td>' + attr.status.stype[data[i].status] + '</td>\
                        </tr>'
            }
            that.homeData = _html;
          }else{
            that.homeData = '<tr><td colspan=8>暂无数据</td></tr>'
          }
          that.$store.commit('hideLoading');
        })
        .catch(function(error) {
            that.$store.commit('hideLoading');
        });
      },
      showHomePanel:function(e){
        var id = "";
        if(e.target.className == "selectData"){
          id = e.target.dataset.id
        }else{
          id = e.target.parentNode.dataset.id;
        }
        this.$store.commit("homeId",id);
        this.$store.commit("showPanel","homePanel");
      }
    }
  }
   </script>
<style scoped>
  .page{
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    left: 170px;
    overflow: auto;
    z-index: 1;
    padding: 30px;
    font-size: 16px;
    color: #333333;
  }
  .search-inp{
    width: 230px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #eaeaea;
    border-radius: 30px;
    padding: 0 10px 0 46px;
    margin: 0;
    font-size: 14px;
    color: #333333;
    outline: none;
    background: url(../../../static/search.png) no-repeat 10px center;
  }
  .s-button{
    margin-left: 20px;
  }
</style>

