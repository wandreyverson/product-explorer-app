import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/ProductListView.vue'),
  },
  {
    path: '/produto/:id',
    component: () => import('../views/ProductDetailsView.vue')
  },
  {
    path: '/carrinho',
    component: () => import('../views/CartView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
