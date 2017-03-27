/**
 * Created by superman on 2016/12/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      homeLeft:[
        {title:"待审批",router:"/home/check"},
        {title:"审批中",router:"/home/checking"},
        {title:"已通过",router:"/home/pass"},
        {title:"已拒绝",router:"/home/refuse"}
      ],
      checkLeft:[
        {title:"欺诈信息管理",router:"/check/cheat"},
        {title:"贷款综合查询",router:"/check/search"},
        {title:"产品管理",router:"/check/product"}
      ],
      sysLeft:[
        {title:"系统管理",router:"/setting/role"},
        {title:"成员管理",router:"/setting/account"}
      ],
      loading:false,
      mask:false,
      hint:false
    },
    mutations: {
      showLoading(state) {
        state.loading = true
      },
      hideLoading(state) {
        state.loading = false
      },
      showMask(state) {
          state.mask = true
      },
      hideMask(state) {
          state.mask = false
      },
      hint(state,text){
        state.hint = true;
        state.hintText = text;
        setInterval(function(){
        state.hint = false;
          },5000)
      }
    }
});
