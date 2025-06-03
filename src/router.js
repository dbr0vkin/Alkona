import { createWebHistory, createRouter } from 'vue-router';
import SignForm from './components/SignForm.vue';
import Task from './components/Task.vue';

const routes = [
  { path: '/', component: SignForm },
  { path: '/sign', component: SignForm },
  { path: '/task', name: 'task', component: Task },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;