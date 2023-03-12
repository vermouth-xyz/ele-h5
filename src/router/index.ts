import { createRouter, createWebHistory } from 'vue-router'
import TabsView from '../views/tabs/TabsView.vue'
import HomeView from '../views/tabs/home/HomeView.vue'
import OrderView from '../views/tabs/order/OrderView.vue'
import MeView from '../views/tabs/me/MeView.vue'
// import ErrorView from '../views/ErrorView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tabs',
      redirect: '/home',
      component: TabsView,
      children: [
        {
          name: 'home',
          path: '/home',
          component: HomeView
        },
        {
          name: 'order',
          path: '/order',
          component: OrderView
        },
        {
          name: 'me',
          path: '/me',
          component: MeView
        }
      ]
    }
    // {
    //   path: '*',
    //   name: '404',
    //   component: ErrorView
    // }
  ]
})

export default router
