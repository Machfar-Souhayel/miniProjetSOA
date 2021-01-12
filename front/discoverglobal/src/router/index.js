import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Countries from '../views/Countries.vue'
import Details from '../views/CountryDetails.vue'
import Continents from '../views/Continents.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/countries',
    name: 'Countries',
    component: Countries
  },
  {
    path: '/countries/details',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/continents',
    name: 'Continents',
    component: Continents,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
