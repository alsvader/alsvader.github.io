import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { SEO } from '../../components';
import { constants } from '../../utils/constants';
import NotFoundImage from '../../assets/images/not_found.webp';
import styles from './styles';

const NotFound = ({ classes, redirect, label }) => {
	const [t] = useTranslation();
	const location = useLocation();

	return (
		<>
			<SEO url={`${constants.APP_WEBSITE_URL}${location.pathname.slice(1)}`} />
			<main className={classes.root}>
				<section>
					<div>
						<h1>{t('notFound.title')}</h1>
						<p>{t('notFound.descr')}</p>
						<Button
							variant="contained"
							color="primary"
							size="large"
							component={RouterLink}
							to={redirect}
						>
							{t(label)}
						</Button>
					</div>
					<div>
						<img src={NotFoundImage} alt="page not found" />
					</div>
				</section>
			</main>
		</>
	);
};

NotFound.defaultProps = {
	redirect: '/',
	label: 'notFound.backHome',
};

NotFound.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string.isRequired,
	}).isRequired,
	redirect: PropTypes.string,
	label: PropTypes.string,
};

export default withStyles(styles)(NotFound);
