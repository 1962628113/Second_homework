import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Topfour from '@/components/Topfour/index.vue'
import compact from '@/components/compact/compact.vue'
import changeToArray from '@/components/changeToArray/changeToArray.vue'
import changeToString from '@/components/changeToString/changeToString.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Topfour',
      name: 'Topfour',
      component: Topfour
    },
    {
      path: '/compact',
      name: 'compact',
      component: compact
    },
    {
      path:'/changeToArray',
      name:'changeToArray',
      component:changeToArray
    },
    {
      path:'/changeToString',
      name:'changeToString',
      component:changeToString
    }
  ]
})
