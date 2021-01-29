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
      component:()=>import('../view/container.vue'),
      meta: {
        keepAlive: true  // 需要缓存
        }
    },
    {
      path: '/salesSql',
      name: 'salesSql',
      component:()=>import('../view/salesSql.vue'),
      meta: {
        keepAlive: true  // 需要缓存
        }
    },
    {
      path: '/public',
      name: 'public',
      component:()=>import('../view/public.vue'),
      meta: {
        keepAlive: true  // 需要缓存
        }
    }
  ]
})
