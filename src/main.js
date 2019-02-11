import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'

import router from './routes'

import App from './App.vue'
Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
