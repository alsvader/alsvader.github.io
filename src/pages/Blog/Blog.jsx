import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Chip, Paper, IconButton, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { BlogCard } from '../../components';
import styles from './styles';

const Blog = ({ classes }) => {
	const [tags, setTags] = useState([]);
	const [t] = useTranslation();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('tablet'));

	const addOrRemoveTag = (tag) => {
		console.log(tag);
		const index = tags.findIndex((item) => item === tag);

		if (index >= 0) {
			tags.splice(index, 1);
			setTags([...tags]);
			return;
		}

		setTags([...tags, tag]);
	};

	return (
		<main className={classes.container}>
			<nav>
				<ul>
					<li>{t('blog.blog')}</li>
					<li>/</li>
					<li>{t('blog.searchResults')}</li>
				</ul>
			</nav>
			<div className={classes.searchBarContainer}>
				<Paper elevation={3}>
					<form>
						<IconButton aria-label="search" color="primary">
							<SearchIcon />
						</IconButton>
						<input type="text" placeholder="Search an article" />
						<h6>123 results</h6>
						{matches && (
							<Button variant="contained" color="primary" size="large">
								Search
							</Button>
						)}
					</form>
				</Paper>
				{!matches && (
					<Button
						id="mobileButton"
						variant="contained"
						color="primary"
						size="large"
					>
						Search
					</Button>
				)}
			</div>
			<div className={classes.chipContainer}>
				<Chip
					label="React"
					color={tags.includes('React') ? 'primary' : 'default'}
					onClick={() => addOrRemoveTag('React')}
				/>
				<Chip
					label="javascript"
					color={tags.includes('javascript') ? 'primary' : 'default'}
					onClick={() => addOrRemoveTag('javascript')}
				/>
				<Chip
					label="NodeJs"
					color={tags.includes('NodeJs') ? 'primary' : 'default'}
					onClick={() => addOrRemoveTag('NodeJs')}
				/>
				<Chip
					label="Gatsby"
					color={tags.includes('Gatsby') ? 'primary' : 'default'}
					onClick={() => addOrRemoveTag('Gatsby')}
				/>
				<Chip
					label="React native"
					color={tags.includes('React native') ? 'primary' : 'default'}
					onClick={() => addOrRemoveTag('React native')}
				/>
				<Chip
					label="Material UI"
					color={tags.includes('Material UI') ? 'primary' : 'default'}
					onClick={() => addOrRemoveTag('Material UI')}
				/>
			</div>
			<section className={classes.articlesContainer}>
				{new Array(9).fill(' ').map((item, index) => (
					<article>
						<BlogCard />
					</article>
				))}
			</section>
		</main>
	);
};

Blog.propTypes = {
	classes: PropTypes.shape({
		container: PropTypes.string.isRequired,
		chipContainer: PropTypes.string.isRequired,
		searchBarContainer: PropTypes.string.isRequired,
		articlesContainer: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(Blog);
