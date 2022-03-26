import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NotFoundImage from '../../assets/images/not_found.jpg';
import styles from './styles';

const NotFound = ({ classes, redirect, label }) => {
	const [t] = useTranslation();
	return (
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
