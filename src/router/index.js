import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../components/main/Home.vue'
import Essence from '../components/main/Essence.vue'
import Share from '../components/main/Share.vue'
import Ask from '../components/main/Q&A.vue'
import Job from '../components/main/Advertise.vue'
import Topic from '../components/Topic.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/topic/:id',
        name:"Topic",
        component:Topic
      },
      {
        path:'/Home',
        name:'Home',
        component: Home
      },
      {
        path:'/Essence',
        name:'Essence',
        component: Essence
      },
      {
        path:'/Share',
        name:'Share',
        component: Share
      },
      {
        path:'/Q&A',
        name:'Q&A',
        component: Ask
      },
      {
        path:'/Advertise',
        name:'Advertise',
        component:  Job
      },
    ]
  },

  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
/*mode: 'history',*/
  base: process.env.BASE_URL,
  routes
})

export default router
