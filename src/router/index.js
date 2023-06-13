import { createRouter,createWebHistory } from "vue-router";
import homePage from "@/views/homePage.vue"
import aboutPage from "@/views/aboutPage.vue"

const routes = [
    {
        path:"/",
        name:"home",
        component:homePage,
    },
    {
        path:"/about",
        name:"about",
        component:aboutPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
