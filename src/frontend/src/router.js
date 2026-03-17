import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import CuriosidadesMinhocas from './views/CuriosidadesMinhocas.vue'

const routes = [
  { path: '/', name: 'home', component: HelloWorld },
  {
    path: '/curiosidades-minhocas',
    name: 'curiosidades-minhocas',
    component: CuriosidadesMinhocas
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
