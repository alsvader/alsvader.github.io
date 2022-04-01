import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { withStyles } from '@material-ui/core/styles';
import { Giscus } from '@giscus/react';
import { CopyButton, PageLoader } from '../../components';
import NotFound from '../404/NotFound';
import { constants, dates } from '../../utils/constants';
import { scrollToTop } from '../../utils/scroll';
import Profile from '../../assets/images/profile.jpg';
import styles from './styles';

const BlogDetails = ({ classes }) => {
	const { slug } = useParams();
	const [post, setPost] = useState(null);
	const [notFound, setNotFound] = useState(false);
	const languageCode = useSelector((state) => state.system.languageCode);
	const posts = useSelector((state) => state.articles.data);
	const [t] = useTranslation();
	const {
		REACT_APP_GISCUS_REPO,
		REACT_APP_GISCUS_REPO_ID,
		REACT_APP_GISCUS_CATEGORY,
		REACT_APP_GISCUS_CATEGORY_ID,
	} = process.env;

	useEffect(() => {
		if (posts.length > 0) {
			const postFound = posts.find(
				(post) => post.attributes.slug === slug.trim(),
			);

			if (postFound) {
				setPost(postFound);
				return;
			}

			setNotFound(true);
		}
	}, [slug, posts]);

	useEffect(() => {
		scrollToTop();
	}, []);

	if (!post && !notFound) return <PageLoader />;

	if (notFound)
		return <NotFound redirect="/blog" label="blog.seeAllArticles" />;

	const {
		attributes: { imageCover, published },
	} = post;

	return (
		<main className={classes.container}>
			<article>
				<div className="header">
					<img
						src={`${constants.MEDIA_URI}${imageCover}`}
						alt="intro to react js"
						loading="lazy"
					/>
					<div className="meta">
						<div>
							<Avatar
								src={Profile}
								alt="Aaron Lopez Sosa"
								className={classes.avatarLarge}
							/>
						</div>
						<div className="metaIconsContainer">
							<span>
								{`${t('blog.postedOn')} ${dates.toLocalDate(
									published,
									languageCode,
								)}`}
							</span>
							<span>
								{`${(post.body.split(' ').length / 155).toFixed(0)} ${t(
									'blog.timeToRead',
								)}`}
							</span>
						</div>
					</div>
					<h1>{post.attributes.title}</h1>
				</div>
				<div className="content">
					{post && (
						<ReactMarkdown
							children={post.body}
							components={{
								img: ({ node, ...props }) => {
									const { alt, src, title } = props;
									return (
										<img
											src={`${constants.MEDIA_URI}${src}`}
											alt={alt}
											title={title}
											loading="lazy"
										/>
									);
								},
								code: ({ node, inline, className, children, ...props }) => {
									const match = /language-(\w+)/.exec(className || '');
									return !inline && match ? (
										<>
											<CopyButton data={children[0]} />
											<SyntaxHighlighter
												children={String(children).replace(/\n$/, '')}
												style={a11yDark}
												language={match[1]}
												PreTag="div"
												{...props}
											/>
										</>
									) : (
										<code className={className} {...props}>
											{children}
										</code>
									);
								},
							}}
						/>
					)}
				</div>
				<div className="comments">
					<Giscus
						repo={REACT_APP_GISCUS_REPO}
						repoId={REACT_APP_GISCUS_REPO_ID}
						category={REACT_APP_GISCUS_CATEGORY}
						categoryId={REACT_APP_GISCUS_CATEGORY_ID}
						mapping="pathname"
						reactionsEnabled="1"
						emitMetadata="0"
						theme="light"
						lang={languageCode || 'en'}
						term="intro-to-react"
					/>
				</div>
			</article>
		</main>
	);
};

BlogDetails.propTypes = {
	classes: PropTypes.shape({
		container: PropTypes.string.isRequired,
		avatarLarge: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(BlogDetails);
