const styles = (theme) => ({
	container: {
		padding: '6%',
		width: '100%',
		'& nav': {
			width: '100%',
			'& ul': {
				display: 'flex',
				fontSize: '1.2rem',
				gap: '7px',
				listStyleType: 'none',
				padding: 0,
				'& li:first-child': {
					color: theme.palette.primary.main,
					fontWeight: 'bold',
				},
				'& li:last-child': {
					textTransform: 'capitalize',
				},
			},
		},
		[theme.breakpoints.up('md')]: {
			padding: '3%',
		},
		[theme.breakpoints.up('laptop')]: {
			margin: '0 auto',
			width: '92%',
		},
		[theme.breakpoints.up('laptopLg')]: {
			padding: '2%',
			width: '81%',
		},
		[theme.breakpoints.up('xl')]: {
			width: '67%',
		},
	},
	searchBarContainer: {
		marginBottom: '2rem',
		width: '100%',
		'& .MuiPaper-root': {
			padding: '1rem',
			'& form': {
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
				'& button:first-child': {
					padding: 0,
				},
				'& input[type="text"]': {
					border: 'none',
					fontSize: '1rem',
					flex: 1,
					height: '1rem',
					padding: '1rem',
					'&::placeholder': {
						fontSize: '1rem',
					},
					'&:focus-visible': {
						outline: 'none',
					},
				},
				'& h6': {
					color: '#677788',
					display: 'none',
					fontSize: '0.9rem',
					margin: 0,
					[theme.breakpoints.up('tablet')]: {
						display: 'block',
						padding: '0.5rem',
					},
				},
			},
		},
		'& #mobileButton': {
			width: '100%',
		},
	},
	chipContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		textTransform: 'uppercase',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
	articlesContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '2rem',
		marginTop: '2rem',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			gap: '3rem',
			'& article': {
				margin: '0 auto',
				width: '90%',
				[theme.breakpoints.up('tablet')]: {
					margin: 0,
					width: '46%',
				},
				[theme.breakpoints.up('laptop')]: {
					width: '29%',
				},
				[theme.breakpoints.up('laptopLg')]: {
					width: '30%',
				},
			},
		},
		[theme.breakpoints.up('tablet')]: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'center',
			marginTop: '3rem',
		},
		'& #pagination': {
			display: 'flex',
			justifyContent: 'center',
			marginTop: '1rem',
			marginBottom: '1rem',
			width: '100%',
			'& .MuiPagination-ul': {
				justifyContent: 'center',
			},
		},
	},
	notFoundContainer: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		margin: '1rem 0 4rem',

		'& > svg': {
			fontSize: '5rem',
		},

		'& h2': {
			fontSize: '2rem',
			margin: '4px 0',
			textTransform: 'capitalize',
		},

		'& p': {
			fontSize: '1.2rem',
			margin: 0,
			textAlign: 'center',
			'& > span': {
				fontWeight: 'bold',
			},
		},
	},
	loading: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		margin: '4rem 0',
		'& h2': {
			fontSize: '2rem',
			fontWeight: 'bold',
		},
	},
});

export default styles;
