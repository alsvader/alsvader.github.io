import bgHome from '../../assets/images/bg_home3.jpg';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		height: '100%',
		width: '100%',
	},
	homeGrid: {
		backgroundImage: `url(${bgHome})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		color: '#ffffff',
		height: 'auto',
		padding: '70px 0 !important',
		textAlign: 'center',
		width: '100%',
		'& h1': {
			fontSize: '2.3rem',
			lineHeight: 1.2,
		},
		'& h2 > span': {
			color: theme.palette.primary.main,
		},
		[theme.breakpoints.up('tablet')]: {
			height: '80vh',
		},
		[theme.breakpoints.up('ipadAir')]: {
			height: '70vh',
		},
		[theme.breakpoints.up('md')]: {
			height: '95vh',
		},
		[theme.breakpoints.up('laptopLg')]: {
			height: '100vh',
		},
		[theme.breakpoints.up('xl')]: {
			height: '75vh',
		},
	},
	avatarLarge: {
		border: '5px solid #dee2e6',
		margin: '0 auto',
		height: '15rem',
		width: '15rem',
	},
	callToActionButton: {
		marginBottom: '3%',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '59%',
		},
		[theme.breakpoints.up('md')]: {
			width: '20%',
			marginRight: '1%',
		},
		[theme.breakpoints.up('laptopLg')]: {
			width: '15%',
		},
	},
	containerInfoDetail: {
		marginTop: '-15%',
		[theme.breakpoints.up('mobile360')]: {
			marginTop: '-10%',
		},
		[theme.breakpoints.up('sm')]: {
			marginTop: '-25%',
		},
		[theme.breakpoints.up('md')]: {
			marginTop: '-15%',
		},
		[theme.breakpoints.up('lg')]: {
			marginTop: '-12%',
		},
		[theme.breakpoints.up('laptopLg')]: {
			marginTop: '-8%',
		},
		[theme.breakpoints.up('xl')]: {
			marginTop: '-6%',
		},
	},
	infoDetail: {
		padding: '1rem',
		'& p': {
			color: '#8492a6',
			fontSize: '1.2rem',
			fontWeight: '600',
			lineHeight: '2rem',
		},
		'& a': {
			color: theme.palette.primary.main,
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	},
	infoDetailGrid: {
		backgroundColor: '#F8F9FA',
	},
	infoDetailList: {
		// wordBreak: 'break-all',
		// overflowWrap: 'break-word',
		wordWrap: 'break-word',
		'& .MuiListItemIcon-root': {
			minWidth: '40px', // default val: 56px
		},
		'& .MuiListItem-gutters': {
			paddingLeft: '0px', // default: 16px
			paddingRight: '0px', // default: 16px
		},
	},
	gridServices: {
		margin: '10% auto',
		[theme.breakpoints.up('md')]: {
			margin: '8% auto',
		},
		[theme.breakpoints.up('lg')]: {
			margin: '5% auto',
		},
		'& h2': {
			fontSize: '1.9rem',
			textAlign: 'center',
		},
		'& h3': {
			fontSize: '1.3rem',
			textAlign: 'center',
			margin: '1.5rem auto 0 auto',
		},
		'& p': {
			color: theme.palette.greyColor.main,
			margin: '1rem auto',
			textAlign: 'center',
		},
		'& .MuiCardContent-root': {
			height: '220px',
		},
	},
	cardService: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	portfolioContainer: {
		background: '#FFFFFF',
		'& h2': {
			fontSize: '1.9rem',
			textAlign: 'center',
		},
		'& p': {
			color: theme.palette.greyColor.main,
		},
	},
	footer: {
		background: theme.palette.primary.main,
	},
});

export default styles;
