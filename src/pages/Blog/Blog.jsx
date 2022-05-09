import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
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
import { BlogCard, SEO } from '../../components';
import {
	searchArticles,
	searchByTags,
} from '../../redux/middleware/configuration';
import { ARTICLES_ACTIONS } from '../../redux/actions';
import { scrollToTop } from '../../utils/scroll';
import styles from './styles';
import { constants } from '../../utils/constants';

const Blog = ({ classes }) => {
	const { posts, articleTags, noDataFound, termSearch } = useSelector(
		({ articles }) => articles,
	);
	const { isLoading, languageCode } = useSelector(({ system }) => system);
	const dispatch = useDispatch();
	const [tags, setTags] = useState([]);
	const [term, setTerm] = useState('');
	const [t] = useTranslation();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('tablet'));

	const { search } = useLocation();

	const addOrRemoveTag = (tag) => {
		const index = tags.findIndex((item) => item === tag);

		if (index >= 0) {
			tags.splice(index, 1);
			setTags([...tags]);
			dispatch(searchByTags(tags));
			return;
		}

		setTags([...tags, tag]);
		dispatch(searchByTags([...tags, tag]));
	};

	useEffect(() => {
		const searchParams = new URLSearchParams(search);
		if (searchParams.has('tag')) {
			const tagAvailable = articleTags.find(
				(articleTag) =>
					articleTag.toLowerCase() === searchParams.get('tag').toLowerCase(),
			);

			if (tagAvailable) {
				addOrRemoveTag(tagAvailable);
			}
		}
	}, [search]);

	useEffect(() => {
		scrollToTop();
		return () => {
			dispatch(ARTICLES_ACTIONS.setTermSearch(''));
			dispatch(searchArticles(''));
		};
	}, []);

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
						<BlogCard
							attributes={post.attributes}
							languageCode={languageCode}
						/>
					</article>
				))}
				{posts.length > 0 && (
					<div id="pagination">
						<Pagination
							count={Math.ceil(posts.length / 9)}
							color="primary"
							size="large"
						/>
					</div>
				)}
			</>
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(searchArticles(term));
	};

	return (
		<>
			<SEO
				title="Artículos y Tutoriales"
				description="Aquí encontrarás los artículos y tutoriales que he escrito. Me gusta compartir todo lo que aprendo en el día a día en mi trabajo y tiempos libres"
				url={`${constants.APP_WEBSITE_URL}blog`}
				type="article"
			/>
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
						<form onSubmit={handleSubmit}>
							<IconButton aria-label="search" color="primary">
								<SearchIcon />
							</IconButton>
							<input
								type="text"
								placeholder={t('blog.searchPlaceholder')}
								onChange={(e) => setTerm(e.target.value)}
							/>
							{termSearch && (
								<h6>
									{posts.length}{' '}
									{posts.length > 1 ? t('blog.results') : t('blog.result')}
								</h6>
							)}
							{matches && (
								<Button
									type="submit"
									variant="contained"
									color="primary"
									size="large"
								>
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
					{articleTags.map((articleTag) => (
						<Chip
							key={articleTag}
							label={articleTag}
							color={tags.includes(articleTag) ? 'primary' : 'default'}
							onClick={() => addOrRemoveTag(articleTag)}
						/>
					))}
				</div>
				<section className={classes.articlesContainer}>
					{printContent()}
				</section>
			</main>
		</>
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
