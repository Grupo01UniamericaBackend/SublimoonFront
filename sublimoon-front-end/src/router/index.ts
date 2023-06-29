import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'Pagina Inicial',
    component: () => import('@/views/PgInicialView.vue')
  },
  {
    path: '/Usuario',
    name: 'Pagina do Usuario',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/CadastrarProduto',
    name: 'cadastar-produto-view',
    component: () => import('../views/ProdutoView.vue/ProdutoCad.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
