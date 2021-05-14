import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resting from '../views/Resting.vue'
import ChoosingPattern from '../views/ChoosingPattern.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/resting',
        name: 'resting',
        component: Resting
    },
    {
        path: '/active',
        name: 'active',
        component: () => import(/* webpackChunkName: "about" */ '../views/Active.vue')
    },
    {
        path: '/choose-pattern',
        name: 'choose-pattern',
        component: ChoosingPattern
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router