import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YunliView from '../views/YunliView.vue'
import DprianView from '../views/DprianView.vue'
import DprliveView from '../views/DprliveView.vue'
import NonlyView from '../views/NonlyView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/callback',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/yunli',
      name: 'yungli',
      component: YunliView
    },
    {
      path: '/nonly',
      name: 'nonly',
      component: NonlyView

    },
    {
      path: '/dprian',
      name: 'dprian',
      component: DprianView
    },
    {
      path: '/dprlive',
      name: 'dprlive',
      component: DprliveView
    }
  ]
})

export default router
