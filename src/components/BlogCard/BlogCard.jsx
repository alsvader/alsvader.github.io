import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Fab,
	Fade,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { constants, dates } from '../../utils/constants';
import styles from './styles';

export const BlogCard = ({ classes, attributes, languageCode = 'en' }) => {
	const [shareOpen, setShareOpen] = useState(false);

	const openShare = () => setShareOpen(!shareOpen);

	const { title, slug, tag, description, published, imageCover } = attributes;

	return (
		<Card className={classes.card}>
			<CardMedia
				component="img"
				alt={title}
				height="140"
				image={`${constants.MEDIA_URI}${imageCover}`}
				title={title}
				loading="lazy"
			/>
			<CardContent>
				<Fade in={shareOpen} timeout={1000}>
					<div className={classes.shareContainer}>
						<Fab
							color="primary"
							size="medium"
							href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
								constants.APP_WEBSITE_URL + slug,
							)}&display=popup`}
							target="_blank"
						>
							<FacebookIcon />
						</Fab>
						<Fab
							color="primary"
							size="medium"
							href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
								constants.APP_WEBSITE_URL + slug,
							)}&via=als_link`}
							target="_blank"
						>
							<TwitterIcon />
						</Fab>
					</div>
				</Fade>
				<Fab
					color="primary"
					aria-label="add"
					size="medium"
					className={classes.fabButton}
					onClick={openShare}
				>
					{shareOpen ? <CloseIcon /> : <ShareIcon />}
				</Fab>
				<div className={classes.tagContainer}>
					<Link to={`/blog?tag=${tag}`}>{tag || 'React'}</Link>
					<time>{dates.toLocalDate(published, languageCode)}</time>
				</div>
				<Typography gutterBottom variant="h5" component="h3">
					<Link to={`/${slug}`}>{title || 'Intro to React JS'}</Link>
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{description || ''}
				</Typography>
			</CardContent>
		</Card>
	);
};

BlogCard.propTypes = {
	classes: PropTypes.shape({
		card: PropTypes.string.isRequired,
		tagContainer: PropTypes.string.isRequired,
		fabButton: PropTypes.string.isRequired,
		shareContainer: PropTypes.string.isRequired,
	}).isRequired,
	attributes: PropTypes.shape({
		title: PropTypes.string,
		slug: PropTypes.string,
		tag: PropTypes.string,
		description: PropTypes.string,
	}).isRequired,
	languageCode: PropTypes.string.isRequired,
};

export default withStyles(styles)(BlogCard);
