import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegistrationPage.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/addnote',
      name:
    }
  ]
})

export default router
