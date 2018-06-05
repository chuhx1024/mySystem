import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/views/login';
import BigScreen from '@/views/bigScreen/fullPage/fullPage';
import Hazard from '@/views/bigScreen/hazard/index';
import Threaten from '@/views/bigScreen/threaten/index';
import ControlCenter from '@/views/bigScreen/controlCenter/index';
import SafeBg from '@/views/bigScreen/safeBg/index';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/bigScreen',
      name: 'BigScreen',
      component: BigScreen,
      children: [{
        path: 'hazard',
        component: Hazard,
        meta: [],
      }, {
        path: 'threaten',
        component: Threaten,
        meta: [],
      }, {
        path: 'controlCenter',
        component: ControlCenter,
        meta: [],
      },
      {
        path: 'safeBg',
        component: SafeBg,
        meta: [],
      },
      ]

    }
  ]
})
