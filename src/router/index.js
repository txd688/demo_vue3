import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '@/components/Layouts';

const routes = [
  {
    path: '/demo',
    redirect: '/demo/demo',
    component: UserLayout,
    children: [
      {
        path: '/demo/demo',
        name: 'Demo',
        component: () => import('@/views/demo/Demo.vue')
      },
      {
        path: '/demo/signature',
        name: 'Signature',
        component: () => import('@/views/demo/Signature.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
