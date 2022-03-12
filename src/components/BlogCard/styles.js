const styles = (theme) => ({
	card: {
		position: 'relative',
		minHeight: '470px',
		'& h3': {
			fontSize: '1.5rem',
			fontWeight: 700,
			'& a': {
				color: 'rgba(0, 0, 0, 0.87)',
				textDecoration: 'none',
				transition: 'all 0.5s ease',
				'&:hover': {
					color: theme.palette.primary.main,
				},
			},
		},
	},
	tagContainer: {
		display: 'flex',
		flexDirection: 'row',
		textTransform: 'uppercase',
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
	fabButton: {
		position: 'absolute',
		top: '24%',
		right: '5%',
		[theme.breakpoints.up('md')]: {
			top: '25%',
		},
		[theme.breakpoints.up('lg')]: {
			top: '25%',
		},
	},
	shareContainer: {
		display: 'flex',
		flexDirection: 'row',
		position: 'absolute',
		right: '24%',
		top: '24%',
		[theme.breakpoints.up('md')]: {
			top: '25%',
			right: '19%',
		},
		[theme.breakpoints.up('lg')]: {
			top: '25%',
			right: '22%',
		},
		'& button:last-child': {
			marginLeft: '8%',
		},
	},
});

export default styles;
