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
	},
	chipContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
});

export default styles;
