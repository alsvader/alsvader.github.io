import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Footer = ({ classes }) => {
	const [t] = useTranslation();
	return (
		<Grid container className={classes.root}>
			<Grid item xs={12} lg={4}>
				<h2>{t('home.location')}</h2>
				<p>{t('home.villahermosa')}</p>
			</Grid>
			<Grid item xs={12} lg={4}>
				<h2>{t('home.followSocialMedia')}</h2>
				<a
					href="https://www.facebook.com/aaron.lopez.sosa.developer"
					target="_blank"
					rel="noreferrer"
				>
					<FacebookIcon />
				</a>
				<a href="https://twitter.com/als_link" target="_blank" rel="noreferrer">
					<TwitterIcon />
				</a>
				<a
					href="https://www.linkedin.com/in/aaronlopezsosa93/"
					target="_blank"
					rel="noreferrer"
				>
					<LinkedInIcon />
				</a>
				<a
					href="https://www.instagram.com/alsvader/"
					target="_blank"
					rel="noreferrer"
				>
					<InstagramIcon />
				</a>
			</Grid>
			<Grid item xs={12} lg={4}>
				<h2 className={classes.lastChild}>{t('home.aboutMe')}</h2>
				<p>{t('home.aboutMeDescr')}</p>
			</Grid>
			<Grid item xs={12}>
				<small>{t('home.copyright')}</small>
			</Grid>
		</Grid>
	);
};

Footer.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string.isRequired,
		lastChild: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(Footer);
