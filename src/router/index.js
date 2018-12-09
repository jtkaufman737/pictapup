import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/Home'
import DetailView from '@/components/Detail'
import PostView from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    }
  ]
})
