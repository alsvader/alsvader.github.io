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
import styles from './styles';

export const BlogCard = ({ classes }) => {
	const [shareOpen, setShareOpen] = useState(false);

	const openShare = () => setShareOpen(!shareOpen);

	return (
		<Card className={classes.card}>
			<CardMedia
				component="img"
				alt="Test card"
				height="140"
				image="https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg"
				title="Test Card"
			/>
			<CardContent>
				<Fade in={shareOpen} timeout={1000}>
					<div className={classes.shareContainer}>
						<Fab color="primary" size="medium">
							<FacebookIcon />
						</Fab>
						<Fab color="primary" size="medium">
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
					<Link to="/">React</Link>
					<time>1st January</time>
				</div>
				<Typography gutterBottom variant="h5" component="h3">
					<Link to="/">Intro to React JS</Link>
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
					molestias deleniti in dicta quasi, rerum tempora corrupti dolor
					voluptatibus, assumenda, illum quod ut quidem iusto possimus sequi
					saepe autem beatae!
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
};

export default withStyles(styles)(BlogCard);
