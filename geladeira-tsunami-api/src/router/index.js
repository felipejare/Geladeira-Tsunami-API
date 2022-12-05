import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YunliView from '../views/YunliView.vue'
import DprianView from '../views/DprianView.vue'
import DprliveView from '../views/DprliveView.vue'
import NonlyView from '../views/NonlyView.vue'
import PerfilView from '../views/PerfilView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('../views/CallbackView.vue')
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
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView
    }
  ]
})

export default router
