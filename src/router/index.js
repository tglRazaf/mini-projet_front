import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'root',
        component: () => import('@/components/Homepage.vue')
      },
      {
        path: '/inscription/1',
        name: 'InscriptionForm1',
        component: () => import('../views/inscriptionsForm/InscriptionForm1.vue')
      },
      {
        path: '/inscription/2',
        name: 'InscriptionForm2',
        component: () => import('../views/inscriptionsForm/InscriptionForm2.vue')
      },
      {
        path: '/inscription/3',
        name: 'inscriptionForm3',
        component: () => import('../views/inscriptionsForm/inscriptionForm3.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/admin/AdminHome.vue'),
    children: [
      {
        path: '/admin',
        name: 'adminRoot',
        component: () => import('@/components/adminComponents/Section1.vue')
      },
      {
        path: '/admin/apropos',
        name: 'a propos',
        component: () => import('@/components/adminComponents/apropos.vue')
      },
      {
        path: '/admin/section/:id',
        name: 'section2',
        component: () => import('@/components/adminComponents/Section2.vue')
      },
      {
        path: '/admin/branche/create',
        name: 'createBranche',
        component: () => import('@/components/adminComponents/createBranche.vue')
      },
      {
        path: '/admin/section3/:nom/:id',
        name: 'section3',
        component: () => import('@/components/adminComponents/Section3.vue')
      },
      {
        path: '/admin/filiere/add',
        name: 'addFiliere',
        component: () => import('@/components/adminComponents/addFiliere.vue')
      },
      {
        path: '/admin/payement',
        name: 'payement',
        component: () => import('@/components/adminComponents/payements/payement.vue')
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
