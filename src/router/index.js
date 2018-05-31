import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/views/login';
import BigScreen from '@/views/bigScreen/fullPage/fullPage';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/BigScreen',
      name: 'BigScreen',
      component: BigScreen,
     
    }
  ]
})
