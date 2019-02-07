import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'

import router from './routes'

import App from './App.vue'

Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
