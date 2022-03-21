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
      },
      {
        path: '/demo/screenshots',
        name: 'Screenshots',
        component: () => import('@/views/demo/Screenshots.vue')
      },
      {
        path: '/demo/qrCode',
        name: 'QrCode',
        component: () => import('@/views/demo/QrCode.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
