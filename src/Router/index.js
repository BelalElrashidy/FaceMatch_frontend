import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Pages/Home.vue';
import about from '../components/pages/About.vue';
import projects from '../components/pages/Projects.vue';
import Notfound from '../components/pages/Notfound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
        path: '/projects',
        name: 'projects',
        component: projects
    },
    {
        path: '/:pathMatch(.*)*',
        name:  'notfound',
        component: Notfound
      }
  ]
})

export default router
