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
			[theme.breakpoints.up('sm')]: {
				marginBottom: '6%',
			},
			[theme.breakpoints.up('md')]: {
				marginBottom: '4%',
			},
		},
		'& h3': {
			fontSize: '1.5rem',
			fontWeight: 700,
		},
		'& a': {
			color: 'rgba(0, 0, 0, 0.87)',
			textDecoration: 'none',
			transition: 'all 0.5s ease',
			'&:hover': {
				color: theme.palette.primary.main,
			},
		},
	},
	tagContainer: {
		display: 'flex',
		flexDirection: 'row',
		'& a': {
			color: theme.palette.primary.main,
			fontWeight: 700,
			textDecoration: 'none',
		},
		'& time': {
			color: '#bbb',
			marginLeft: '0.8rem',
		},
	},
	card: {
		position: 'relative',
	},
	fabButton: {
		position: 'absolute',
		top: '30%',
		right: '5%',
		[theme.breakpoints.up('md')]: {
			top: '29%',
		},
		[theme.breakpoints.up('lg')]: {
			top: '32%',
		},
	},
	shareContainer: {
		display: 'flex',
		flexDirection: 'row',
		position: 'absolute',
		right: '23%',
		top: '30%',
		[theme.breakpoints.up('md')]: {
			top: '29%',
			right: '25%',
		},
		[theme.breakpoints.up('lg')]: {
			top: '32%',
			right: '22%',
		},
		'& button:last-child': {
			marginLeft: '8%',
		},
	},
});

export default styles;
