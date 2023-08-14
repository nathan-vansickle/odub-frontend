import * as VueRouter from "vue-router"
import HomePage from "@/views/HomePage"
import AboutPage from "@/views/AboutPage"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },

    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes})

export default router