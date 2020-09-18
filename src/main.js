import Vue from 'vue'
import App from './App.vue'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import VueRouter from 'vue-router'
import Login from './pages/login/Login.vue'
import Registration from './pages/Registration/Registration.vue'
import NewFeed from './pages/NewFeed'
import AddPost from './pages/AddPost'
import { store } from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/newfeed', component: NewFeed },
  { path: '/newpost', component: AddPost }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router,
  store,

}).$mount('#app')
