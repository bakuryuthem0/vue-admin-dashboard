import VueRouter from 'vue-router'
import Login from '../components/Views/Layouts/Login'

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