// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import './style/common.css'// A modern alternative to CSS resets

//引入element-ui start
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入element-ui end

//引入echarts start
import echarts from 'echarts';
Vue.prototype.$echarts = echarts ;
//引入echarts end



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
