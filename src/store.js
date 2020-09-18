import Vue from 'vue'
import Vuex from 'vuex'
import helper from './utils/helpers'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        auth: {},
        isLogin: false
    },
    mutations: {
        initiaStore(state) {
            if (helper.checkItem('auth')) {
                state.auth = helper.getItem('auth')
                state.isLogin = helper.getItem('isLogin')
            }
        },
        login(state, data) {
            if (data.email == 'zain@gmail.com' && data.password == '123') {
                state.auth = { name: 'Zain Ahmed', email: data.email, token: '234knininf3453423c234v23234' }
                state.isLogin = true
                helper.setItem('auth', JSON.stringify({
                    name: 'Zain Ahmed',
                    email: data.email, token: '234knininf3453423c234v23234'
                }))
                helper.setItem('isLogin', true)
            }
        },
        logout(state) {
            helper.removeItem('auth')
            helper.removeItem('isLogin')
            state.auth = {}
            state.isLogin = false
        }

    }
})