import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { BlogCard } from '../';
import styles from './styles';

export const RecentBlog = ({ classes }) => {
	const [t] = useTranslation();

	return (
		<Container className={classes.recentBlogContainer}>
			<h2>{t('home.recentBlog')}</h2>
			<Grid container spacing={4}>
				{new Array(3).fill(' ').map((item, index) => (
					<Grid key={index} item xs={12} sm={6} md={4}>
						<BlogCard />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

RecentBlog.propTypes = {
	classes: PropTypes.shape({
		recentBlogContainer: PropTypes.string.isRequired,
		tagContainer: PropTypes.string.isRequired,
		card: PropTypes.string.isRequired,
		fabButton: PropTypes.string.isRequired,
		shareContainer: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(RecentBlog);
