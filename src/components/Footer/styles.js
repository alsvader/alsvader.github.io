const styles = (theme) => ({
	root: {
		color: 'white',
		flexGrow: 1,
		margin: '0 auto',
		textAlign: 'center',
		width: '90%',
		'& a': {
			alignItems: 'center',
			border: '2px solid transparent',
			borderColor: '#f8f9fa',
			borderRadius: '100%',
			display: 'inline-flex',
			height: '3rem',
			justifyContent: 'center',
			margin: '0 0.3rem',
			padding: '0.5rem',
			width: '3rem',
			'& svg': {
				color: 'white',
				fontSize: '1.3rem',
			},
		},
		'& h2': {
			letterSpacing: '1px',
			marginTop: '3rem',
			textTransform: 'uppercase',
		},
		'& p': {
			fontSize: '1.3rem',
		},
		'& small': {
			display: 'block',
			marginTop: '4rem',
			marginBottom: '2.5rem',
		},
		[theme.breakpoints.up('xs400')]: {
			'& h2': {
				marginTop: '4rem',
			},
		},
		[theme.breakpoints.up('lg')]: {
			'& h2': {
				marginTop: '5rem',
			},
			'& small': {
				marginTop: '6rem',
				marginBottom: '1.5rem',
			},
		},
		[theme.breakpoints.up('xl')]: {
			width: '80%',
		},
	},
	lastChild: {
		marginTop: '4rem !important',
		[theme.breakpoints.up('lg')]: {
			marginTop: '5rem !important',
		},
	},
});

export default styles;
