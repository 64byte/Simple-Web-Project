import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import About from './components/About'
import NotFound from "@/components/NotFound"

Vue.config.productionTip = false

const routes = {
  '/': Home,
  '/about': About
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render: h => h(App),
}).$mount('#app')
