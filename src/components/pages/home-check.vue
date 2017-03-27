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
    <tbody>
      <tr>
        <td>2</td>
        <td>王芳</td>
        <td>420984199012020744 </td>
        <td>动车宝-全款车(先息后本)</td>
        <td>20万</td>
        <td>2个月</td>
        <td>2017-03-09 16:01:59</td>
        <td>面审终审</td>
      </tr>
    </tbody>
  </table>
</div>

</template>
<script>
  export default{
    mounted (){
        this.getData();
    },
    methods:{
      getData:function(){
        var that = this;
        this.$http.post('/api/credit/income/search', {
          loanincome:{
            check_status: "uncheck"
          },
          currentpage:1,
          pagenum:20
        })
        .then(function(response) {

        })
        .catch(function(error) {

        });
      }
    }

  }
</script>
<style>
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
