const styles = (theme) => ({
	recentBlogContainer: {
		marginTop: '10%',
		marginBottom: '20%',
		lineHeight: 1.6,
		[theme.breakpoints.up('sm')]: {
			marginTop: '6%',
			marginBottom: '10%',
		},
		[theme.breakpoints.up('md')]: {
			marginTop: '4%',
		},
		[theme.breakpoints.up('laptop')]: {
			marginTop: '2%',
			marginBottom: '7%',
		},
		[theme.breakpoints.up('lg')]: {
			marginBottom: '5%',
		},
		'& h2': {
			fontSize: '1.9rem',
			textAlign: 'center',
			marginBottom: '10%',
		},
	},
	viewAll: {
		marginTop: '-9%',
		marginBottom: '10%',
		textAlign: 'center',
		width: '100%',
		'& a': {
			color: theme.palette.primary.main,
			fontSize: '1.3rem',
			fontWeight: 'bold',
		},
		[theme.breakpoints.up('sm')]: {
			marginBottom: '6%',
		},
		[theme.breakpoints.up('md')]: {
			marginBottom: '4%',
		},
	},
});

export default styles;
