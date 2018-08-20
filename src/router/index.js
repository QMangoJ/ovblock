import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import test from '../page/test/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: 'test'
        },
        {
          path: 'test',
          component: test
        }
      ]
    }
  ]
})
