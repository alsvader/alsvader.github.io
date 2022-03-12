import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
	Chip,
	Paper,
	IconButton,
	Button,
	CircularProgress,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchIcon from '@material-ui/icons/Search';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { BlogCard } from '../../components';
import styles from './styles';

const Blog = ({ classes }) => {
	const { posts, noDataFound, termSearch } = useSelector(
		({ articles }) => articles
	);
	const [isLoading, setIsLoading] = useState(false);
	const [tags, setTags] = useState([]);
	const [t] = useTranslation();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('tablet'));

	const addOrRemoveTag = (tag) => {
		const index = tags.findIndex((item) => item === tag);

		if (index >= 0) {
			tags.splice(index, 1);
			setTags([...tags]);
			return;
		}

		setTags([...tags, tag]);
	};

	const printContent = () => {
		if (isLoading) {
			return (
				<div className={classes.loading}>
					<CircularProgress size={80} />
					<h2>{t('blog.searching')}</h2>
				</div>
			);
		}

		if (noDataFound) {
			return (
				<div className={classes.notFoundContainer}>
					<WarningIcon color="primary" />
					<h2>{t('blog.noResults')}</h2>
					<p>
						{t('blog.noArticles')} <span>"{termSearch}"</span>
					</p>
				</div>
			);
		}

		return (
			<>
				{posts.map((post, index) => (
					<article key={index}>
						<BlogCard attributes={post.attributes} />
					</article>
				))}
				<div id="pagination">
					<Pagination
						count={Math.ceil(posts.length / 9)}
						color="primary"
						size="large"
					/>
				</div>
			</>
		);
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
						<input type="text" placeholder={t('blog.searchPlaceholder')} />
						<h6>123 {t('blog.results')}</h6>
						{matches && (
							<Button variant="contained" color="primary" size="large">
								{t('blog.search')}
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
						{t('blog.search')}
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
			<section className={classes.articlesContainer}>{printContent()}</section>
		</main>
	);
};

Blog.propTypes = {
	classes: PropTypes.shape({
		container: PropTypes.string.isRequired,
		chipContainer: PropTypes.string.isRequired,
		searchBarContainer: PropTypes.string.isRequired,
		articlesContainer: PropTypes.string.isRequired,
		notFoundContainer: PropTypes.string.isRequired,
		loading: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(Blog);
