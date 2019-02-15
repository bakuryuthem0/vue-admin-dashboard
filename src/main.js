import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import VueAuth from '@websanova/vue-auth'
import router from './routes'
import AuthDriver from "./plugins/auth";
import store from "./stores/Store";

import App from './App.vue'
Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.config.productionTip = false
Vue.router = router;
Vue.use(VueAuth, {
  auth: AuthDriver,
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
