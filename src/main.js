import Vue from 'vue'
import App from './App.vue'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import VueRouter from 'vue-router'
import Login from './pages/login/Login.vue'
import Registration from './pages/Registration/Registration.vue'
import NewFeed from './pages/NewFeed'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/newfeed', component: NewFeed }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
