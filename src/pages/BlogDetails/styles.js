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
				alignItems: 'center',
				display: 'flex',
				fontFamily: "'Inter', sans-serif",
				fontWeight: 600,
				flexDirection: 'column',
				gap: '1rem',
				justifyContent: 'center',
				'& div:last-child > button': {
					paddingTop: '5px !important',
				},
				[theme.breakpoints.up('tablet')]: {
					flexDirection: 'row',
				},
			},
		},
		'& .content': {
			margin: '2.5rem 0',
			'& p': {
				color: '#111',
				fontFamily: "'Inter', sans-serif",
				fontSize: '1.125rem',
				lineHeight: '2rem',
				margin: '1.5rem 0',
				[theme.breakpoints.up('tablet')]: {
					fontSize: '1.25rem',
				},
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
		height: theme.spacing(8),
		width: theme.spacing(8),
	},
});

export default styles;
