import VueRouter from 'vue-router'
import Login from '../components/Views/Layouts/Login'
import Dashboard from '../components/Views/Layouts/Dashboard'
import ShowClients from '../components/Views/Clients/ShowClients'

const router = new VueRouter({
	routes: [{
		path: '/',
		component: Login,
		name: 'Login'
    },
    {
    	path: '/dashboard',
    	component: Dashboard,
    	name: 'dashboard',
    	children : [
    		{
    			path: 'clients',
    			component: ShowClients,
    			name: 'ShowClients'
    		}
    	]
    }]
})

export default router;