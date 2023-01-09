import { createRouter, createWebHistory } from 'vue-router'
import ImageSlider from '../components/ImageSlider.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/image_slider',
      name: 'image_slider',
      component: ImageSlider
    }
  ]
})

export default router
