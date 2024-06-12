import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import HomeView from '../views/HomeView.vue'
import ProductosView from '../views/ProductosView.vue'
import ServiciosView from '../views/ServiciosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },

    {
      path: '/citas',
      name: 'citas  ',
      component: HomeView
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductosView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    }
  ]
})

export default router
