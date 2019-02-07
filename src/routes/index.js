import VueRouter from 'vue-router'
import Login from '../components/Views/Auth/Login'

const router = new VueRouter({
	routes: [{
		path: '/',
		component: Login,
		name: 'Login',
		meta: {
			auth: false
		}
    }]
})

export default router;