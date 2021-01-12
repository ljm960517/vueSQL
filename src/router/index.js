import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('../view/home.vue'),
      meta: {
        keepAlive: true  // 需要缓存
        }
    },
    {
      path: '/container',
      name: 'container',
      component:()=>import('../view/container.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      component:()=>import('../view/test1.vue')
    },
    {
      path: '/test2',
      name: 'test2',
      component:()=>import('../view/test2.vue')
    },
    {
      path: '/test3',
      name: 'test3',
      component:()=>import('../view/test3.vue')
    }
  ]
})
