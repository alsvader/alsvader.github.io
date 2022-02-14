import { Home, Blog } from '../../pages';

const ROUTES = [
	{ path: '/', component: Home, exact: true, strict: true },
	{ path: '/blog', component: Blog, exact: true, strict: true },
];

export default ROUTES;
