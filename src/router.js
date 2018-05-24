import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Crud from  './views/Crud.vue'
import Crud2 from './views/Crud2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
    path: '/crud',
    name: 'crud',
    component: Crud
  },
  {
  path: '/crud2',
  name: 'crud2',
  component: Crud2
}
  ]
})
