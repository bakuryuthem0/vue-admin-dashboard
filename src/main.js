import Vue from 'vue'
import './plugins/vuetify'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'

import router from './routes'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import './assets/scss/app.scss'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
