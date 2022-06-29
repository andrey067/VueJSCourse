import TarefasView from '../views/TarefasView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefa',
        component: TarefasView
    },
    {
        path: '/projetos',
        name: 'ProjetosView',
        component: ProjetosView
    },

    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),    
    routes: rotas
})

export default router
