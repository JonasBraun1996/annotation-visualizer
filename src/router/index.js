import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Annotation from '../components/Annotation.vue'
import ImageSlider from '../components/ImageSlider.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/annotation',
      name: 'annotation',
      component: Annotation
    },
    {
      path: '/image_slider',
      name: 'image_slider',
      component: ImageSlider
    }
  ]
})

export default router
