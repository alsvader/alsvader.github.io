import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { BlogCard } from '../';
import styles from './styles';

export const RecentBlog = ({ classes }) => {
	const [t] = useTranslation();
	const { posts } = useSelector(({ articles }) => articles);
	const { languageCode } = useSelector(({ system }) => system);

	return (
		<Container className={classes.recentBlogContainer}>
			<h2>{t('home.recentBlog')}</h2>
			<div className={classes.viewAll}>
				<Link to="/blog">View all</Link>
			</div>
			<Grid container spacing={4}>
				{posts.slice(0, 3).map((post, index) => (
					<Grid key={index} item xs={12} sm={6} md={4}>
						<BlogCard
							attributes={post.attributes}
							languageCode={languageCode}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

RecentBlog.propTypes = {
	classes: PropTypes.shape({
		recentBlogContainer: PropTypes.string.isRequired,
		viewAll: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(RecentBlog);
