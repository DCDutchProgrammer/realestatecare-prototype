import { createRouter, createWebHistory } from '@ionic/vue-router'

import LoginPage from '@/views/LoginPage.vue'
import TabsPage from '@/views/TabsPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import AssignedReportsPage from '@/views/AssignedReportsPage.vue'
import CompletedReportsPage from '@/views/CompletedReportsPage.vue'
import KnowledgeBasePage from '@/views/KnowledgeBasePage.vue'
import SettingsPage from '@/views/SettingsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardPage
      },
      {
        path: 'assigned',
        component: AssignedReportsPage
      },
      {
        path: 'completed',
        component: CompletedReportsPage
      },
      {
        path: 'knowledge',
        component: KnowledgeBasePage
      },
      {
        path: 'settings',
        component: SettingsPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _from, next) => {
  const isLoggedIn = localStorage.getItem('rec_logged_in') === 'true'

  if (to.path.startsWith('/tabs') && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/tabs/dashboard')
  } else {
    next()
  }
})

export default router