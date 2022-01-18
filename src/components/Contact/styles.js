const styles = (theme) => ({
	container: {
		padding: '15px',
		'& form': {
			width: '100%',
		},
		'& img': {
			width: '100%',
		},
		'& h2': {
			margin: '0',
		},
		'& .MuiFormControl-root': {
			marginBottom: '8%',
		},
		'& .MuiFormControl-root, .MuiTextField-root': {
			width: '100%',
		},
		'& .MuiFormControl-fullWidth > div': {
			height: 168,
			resize: 'none',
		},
		[theme.breakpoints.up('sm')]: {
			'& img': {
				marginLeft: '5%',
				width: '90%',
			},
			'& h2': {
				marginTop: '-10%',
				marginBottom: '6%',
			},
		},
		[theme.breakpoints.up('tablet')]: {
			'& .MuiFormControl-root, .MuiTextField-root': {
				marginBottom: '5%',
				width: '47.5%',
			},
			'& .MuiFormControl-root:nth-child(1)': {
				marginRight: '2.5%',
			},
			'& .MuiFormControl-fullWidth': {
				width: '98%',
			},
		},
		[theme.breakpoints.up('md')]: {
			width: '100%',
			'& img': {
				marginLeft: '0',
				width: '100%',
			},
			'& h2': {
				marginTop: '4%',
			},
		},
		[theme.breakpoints.up('laptopLg')]: {
			margin: '0 auto',
			width: '90%',
		},
		[theme.breakpoints.up('xl')]: {
			width: '80%',
		},
	},
	alert: {
		marginBottom: '8%',
		[theme.breakpoints.up('tablet')]: {
			marginBottom: '5%',
		},
	},
	recaptcha: {
		marginBottom: '8%',
		width: '100%',
		[theme.breakpoints.up('tablet')]: {
			marginBottom: '5%',
		},
	},
});

export default styles;
