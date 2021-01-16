import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Article from "../components/Article";
import About from "../components/About";

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/article", component: Article },
        { path: "/about", component: About },
        { path: "*", component: NotFound },
    ],
})