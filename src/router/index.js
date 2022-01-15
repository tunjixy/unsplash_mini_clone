import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search-result/:search',
    name: 'SearchResult',
    component: () => import('../views/SearchResult.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
