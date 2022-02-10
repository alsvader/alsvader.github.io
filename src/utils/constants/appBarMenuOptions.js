const OPTIONS = [
	{
		label: 'menu.home',
		to: { pathname: '/', hash: '', state: { isCrollable: true } },
		icon: 'Home',
	},
	{
		label: 'menu.services',
		to: { pathname: '/', hash: '#services' },
		icon: 'Business',
	},
	{
		label: 'menu.portfolio',
		to: { pathname: '/', hash: '#portfolio' },
		icon: 'Work',
	},
	{ label: 'menu.blog', to: { pathname: '/', hash: '' }, icon: 'LibraryBooks' },
	{
		label: 'menu.contact',
		to: { pathname: '/', hash: '#contact' },
		icon: 'ContactMail',
	},
];

export default OPTIONS;
