const styles = (theme) => ({
	root: {
		backgroundColor: 'white',
		flexGrow: 1,
		'& section': {
			display: 'flex',
			flexDirection: 'column',
			margin: '0 auto',
			width: '90%',
		},
		paddingTop: '2%',
		paddingBottom: '15%',
		textAlign: 'center',
		'& h1': {
			fontSize: '2.5rem',
			textTransform: 'uppercase',
		},
		'& p': {
			fontSize: '1.2rem',
			lineHeight: '1.9rem',
		},
		'& a': {
			marginTop: '5%',
		},
		'& img': {
			margin: '0 auto',
			width: '100%',
		},
		[theme.breakpoints.up('tablet')]: {
			paddingBottom: '3%',
			'& img': {
				margin: '0 auto',
				width: '90%',
			},
		},
		[theme.breakpoints.up('md')]: {
			'& section': {
				alignItems: 'center',
				flexDirection: 'row',
				textAlign: 'left',
				'& div': {
					width: '50%',
				},
				'& img': {
					width: '100%',
				},
			},
		},
		[theme.breakpoints.up('lg')]: {
			'& section': {
				alignItems: 'flex-start',
				'& div:first-child': {
					paddingTop: '6%',
				},
			},
		},
		[theme.breakpoints.up('laptopLg')]: {
			'& section': {
				width: '77%',
			},
		},
		[theme.breakpoints.up('xl')]: {
			'& section': {
				width: '63%',
			},
		},
	},
});

export default styles;
