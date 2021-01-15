import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Article from "../components/Article";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/article", component: Article },
        { path: "*", component: NotFound },
    ],
})

export default router