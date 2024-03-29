const styles = (theme) => ({
	container: {
		margin: '1rem auto',
		width: '90%',
		[theme.breakpoints.up('tablet')]: {
			width: '78%',
		},
		[theme.breakpoints.up('laptopLg')]: {
			width: '65%',
		},
		[theme.breakpoints.up('xl')]: {
			width: '50%',
		},
		'& .header': {
			width: '100%',
			'& img': {
				width: '100%',
			},
			'& .meta': {
				display: 'flex',
				fontFamily: "'Inter', sans-serif",
				fontWeight: 600,
				flexDirection: 'row',
				gap: 8,
				justifyContent: 'center',
				marginTop: '1rem',

				'& .metaIconsContainer': {
					display: 'flex',
					color: '#474747',
					flexDirection: 'column',
					flexGrow: 1,

					'& span:last-child': {
						color: '#928e8e',
					},
				},
			},
		},
		'& .content': {
			margin: '2.5rem 0',

			color: '#111',
			fontFamily: "'Inter', sans-serif",
			fontSize: '1.125rem',
			lineHeight: '2rem',
			[theme.breakpoints.up('tablet')]: {
				fontSize: '1.25rem',
			},
			'& p': {
				margin: '1.5rem 0',
			},
			'& pre': {
				position: 'relative',
				'& div': {
					maxHeight: '500px',
				},
				'& span.copyCode': {
					color: '#31ABAB',
					visibility: 'hidden',
					position: 'absolute',
					opacity: 0,
					right: 0,
					transition: 'visibility 0s, opacity 0.5s linear',
					'& svg': {
						fontSize: '2rem',
					},
				},
				'&:hover': {
					'& span.copyCode': {
						visibility: 'visible',
						opacity: 1,
					},
				},
			},
			'& img': {
				width: '100%',
				[theme.breakpoints.up('tablet')]: {
					marginLeft: '5%',
					width: '90%',
				},
				[theme.breakpoints.up('laptop')]: {
					marginLeft: '15%',
					width: '70%',
				},
			},
		},
		'& .comments': {
			margin: '6rem 0',
		},
		'& h1, h2, h3, h4': {
			fontFamily: "'Manrope', sans-serif",
		},
		'& h1': {
			fontSize: '1.875rem',
			marginTop: '2.5rem',
			textAlign: 'center',
			[theme.breakpoints.up('tablet')]: {
				fontSize: '2.25rem',
			},
			[theme.breakpoints.up('laptopLg')]: {
				fontSize: '3rem',
			},
		},
		'& h2': {
			fontSize: '1.875rem',
			marginTop: '3.5rem',
			marginBottom: '2rem',
			[theme.breakpoints.up('laptopLg')]: {
				fontSize: '2.25rem',
			},
		},
	},
	avatarLarge: {
		height: theme.spacing(6),
		width: theme.spacing(6),
	},
});

export default styles;
