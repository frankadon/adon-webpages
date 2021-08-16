import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignatureView from '../views/Signatures/SignatureView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:name_:position_:phoneNumber_:phoneOnly_:mobileNumber_:mobileOnly',
    name: 'signatureView',
    component: SignatureView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
