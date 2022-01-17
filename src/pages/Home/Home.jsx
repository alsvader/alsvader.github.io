import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import {
	Grid,
	Container,
	Avatar,
	Button,
	Paper,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Card,
	CardContent,
} from '@material-ui/core';
import {
	GetApp,
	Mail,
	Translate,
	DesktopMac,
	PhoneIphone,
	Language,
} from '@material-ui/icons';
import { Portfolio, RecentBlog, Contact } from '../../components';
import ProfileImage from '../../assets/images/profile.jpg';
import styles from './styles';

const Home = ({ classes }) => {
	const [t] = useTranslation();
	// useEffect(() => {
	//   if (targetRef !== null) {
	//     setTimeout(() => {
	//       targetRef.current.scrollIntoView({ behavior: 'smooth' });
	//     }, 500);
	//   }
	// }, [targetRef]);

	const downloadCv = async () => {
		try {
			const response = await fetch('./aaronlopezsosa.pdf');

			const blob = await response.blob();
			const url = URL.createObjectURL(blob);

			const a = document.createElement('a');
			a.setAttribute('href', url);
			a.setAttribute('download', 'aaronlopezsosa.pdf');
			a.click();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid container className={classes.root} spacing={0}>
			<Grid item xs={12} className={classes.homeGrid}>
				<Container fixed>
					<Avatar
						alt="Aaron Lopez Sosa"
						src={ProfileImage}
						className={classes.avatarLarge}
					/>
					<h1>{`${t('home.hey')} 👋! ${t('home.name')} 👨🏻‍💻`}</h1>
					<h2>
						{t('home.job')}
						<span>{t('home.developer')}</span>
					</h2>
					<Button
						variant="contained"
						color="primary"
						className={classes.callToActionButton}
					>
						{t('home.hireMe')}
					</Button>
					<Button
						variant="contained"
						color="primary"
						endIcon={<GetApp />}
						className={classes.callToActionButton}
						onClick={downloadCv}
					>
						{t('home.downloadCv')}
					</Button>
				</Container>
			</Grid>
			<Grid container item xs={12}>
				<Container className={classes.containerInfoDetail}>
					<Paper elevation={3} className={classes.infoDetail}>
						<Grid container spacing={3}>
							<Grid
								item
								xs={12}
								sm={12}
								md={4}
								lg={3}
								className={classes.infoDetailGrid}
							>
								<h3>{t('home.personalDetails')}</h3>
								<List className={classes.infoDetailList}>
									<ListItem
										button
										component="a"
										href="mailto:aaronlopezsosa@gmail.com"
									>
										<ListItemIcon>
											<Mail />
										</ListItemIcon>
										<ListItemText primary="aaronlopezsosa@gmail.com" />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<Translate />
										</ListItemIcon>
										<ListItemText primary={t('home.languages')} />
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} sm={12} md={8} lg={9}>
								<p>
									Obviously I'm a Web Designer. Web Developer with over 3 years
									of experience. Experienced with all stages of the development
									cycle for dynamic web projects. The as opposed to using
									'Content here, content here', making it look like readable
									English.
								</p>
							</Grid>
						</Grid>
					</Paper>
				</Container>
			</Grid>
			<Container>
				<Grid
					container
					spacing={2}
					item
					xs={12}
					className={classes.gridServices}
				>
					<Grid item xs={12}>
						<h2>{t('home.services')}</h2>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card>
							<CardContent className={classes.cardService}>
								<Language fontSize="large" color="primary" />
								<h3>{t('home.webDevTitle')}</h3>
								<p>{t('home.webDevDescr')}</p>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card>
							<CardContent className={classes.cardService}>
								<PhoneIphone fontSize="large" color="primary" />
								<h3>{t('home.appDevTitle')}</h3>
								<p>{t('home.appDevDescr')}</p>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card>
							<CardContent className={classes.cardService}>
								<DesktopMac fontSize="large" color="primary" />
								<h3>{t('home.desktopDevTitle')}</h3>
								<p>{t('home.desktopDevDescr')}</p>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
			<Grid item xs={12} className={classes.portfolioContainer}>
				<h2>{t('home.portfolio')}</h2>
				<Portfolio />
			</Grid>
			<Grid item xs={12}>
				<RecentBlog />
			</Grid>
			<Grid item xs={12} className={classes.portfolioContainer}>
				<Contact />
			</Grid>
		</Grid>
	);
};

Home.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string.isRequired,
		homeGrid: PropTypes.string.isRequired,
		avatarLarge: PropTypes.string.isRequired,
		callToActionButton: PropTypes.string.isRequired,
		containerInfoDetail: PropTypes.string.isRequired,
		infoDetail: PropTypes.string.isRequired,
		infoDetailGrid: PropTypes.string.isRequired,
		infoDetailList: PropTypes.string.isRequired,
		gridServices: PropTypes.string.isRequired,
		cardService: PropTypes.string.isRequired,
		portfolioContainer: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(Home);
