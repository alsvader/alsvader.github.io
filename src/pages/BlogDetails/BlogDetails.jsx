import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, IconButton } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { withStyles } from '@material-ui/core/styles';
import { Giscus } from '@giscus/react';
import Profile from '../../assets/images/profile.jpg';
import styles from './styles';

const BlogDetails = ({ classes }) => {
	const { slug } = useParams();
	const [post, setPost] = useState(null);
	const languageCode = useSelector((state) => state.system.languageCode);
	const {
		REACT_APP_GISCUS_REPO,
		REACT_APP_GISCUS_REPO_ID,
		REACT_APP_GISCUS_CATEGORY,
		REACT_APP_GISCUS_CATEGORY_ID,
	} = process.env;

	useEffect(() => {
		fetch('http://localhost:5000/articles')
			.then((response) => response.json())
			.then((articles) => {
				const article = articles.find(
					(article) => article.attributes.slug === slug
				);
				setPost(article);
			});
	}, [slug]);

	if (!post) return <h1>Loading...</h1>;

	return (
		<main className={classes.container}>
			<article>
				<div className="header">
					<img
						src="https://repository-images.githubusercontent.com/192620780/3eb64180-586e-11ea-9178-b8a0245411b7"
						alt="intro to react js"
					/>
					<h1>{post.attributes.title}</h1>
					<div className="meta">
						<div>
							<Avatar
								src={Profile}
								alt="Aaron Lopez Sosa"
								className={classes.avatarLarge}
							/>
						</div>
						<div>
							<span>Jan 20, 2022</span>
							<IconButton aria-label="time to read" color="primary">
								<MenuBookIcon />
							</IconButton>
							<span>10 min read</span>
						</div>
					</div>
				</div>
				<div className="content">
					{post && (
						<ReactMarkdown
							children={post.body}
							components={{
								code({ node, inline, className, children, ...props }) {
									const match = /language-(\w+)/.exec(className || '');
									return !inline && match ? (
										<SyntaxHighlighter
											children={String(children).replace(/\n$/, '')}
											style={a11yDark}
											language={match[1]}
											PreTag="div"
											{...props}
										/>
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
