import VueRouter from 'vue-router'
import Login from '../components/Views/Layouts/Login'
import Dashboard from '../components/Views/Layouts/Dashboard'
import Home from '../components/Views/Home'
const Charts = () => import('../components/Views/Charts/Chart')

const router = new VueRouter({
	routes: [{
		path: '/',
		component: Login,
		name: 'Login'
	},
	{
		path: '/dashboard',
		component: Dashboard,
		children : [
			{
				path: '/',
                component: Home,
				name: 'dashboard'
            },
			{
				path: 'components/charts',
				component: Charts,
				name: 'charts'						
			}
		]
	}]
})

export default router;