import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'main',
		component: () => import(/* webpackChunkName: "main" */ '../pages/main'),
	},
	{
		path: '/cart',
		name: 'cart',
		component: () => import(/* webpackChunkName: "cart" */ '../pages/cart'),
	},
	{
		path: '/registration',
		name: 'registration',
		component: () =>
			import(/* webpackChunkName: "registration" */ '../pages/registration'),
	},
	{
		path: '/catalog',
		name: 'catalog',
		component: () =>
			import(/* webpackChunkName: "catalog" */ '../pages/catalog'),
	},
	{
		path: '/product',
		name: 'product',
		component: () =>
			import(/* webpackChunkName: "product" */ '../pages/product'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
