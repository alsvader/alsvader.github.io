import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { withStyles } from '@material-ui/core/styles';
import Profile from '../../assets/images/profile.jpg';
import styles from './styles';

const BlogDetails = ({ classes }) => {
	return (
		<main className={classes.container}>
			<article>
				<div className="header">
					<img
						src="https://repository-images.githubusercontent.com/192620780/3eb64180-586e-11ea-9178-b8a0245411b7"
						alt="intro to react js"
					/>
					<h1>Understanding the NFT Music Industry</h1>
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
					<p>
						Big names such as grimes, 3LAU, and Steve Aoki are leaders within
						the NFT music industry and are well known among NFT creators.
					</p>
					<p>
						They have capitalized on this new industry to pocket millions of
						dollars for themselves and their supporters.
					</p>
					<p>
						Non-Fungible Tokens (NFTs) are generally seen as pictures or videos.
					</p>
					<p>
						That is a misconception that we will uncover in this article by
						exploring the NFT music industry.
					</p>
					<p>
						We will explore why people support music artists by purchasing their
						NFTs with cryptocurrencies.
					</p>
					<h2>What is an NFT, and what does NFT stand for?</h2>
					<p>NFT stands for Non-Fungible Token.</p>
					<p>
						An NFT is a digital file that lives on the blockchain. Once it is on
						the blockchain, it can not be removed.
					</p>
					<p>
						The idea of an NFT existing on the blockchain means that it can not
						be changed, and it is easy to identify the current and previous
						owners of an NFT.
					</p>
					<p>
						An easy way to understand NFTs is to compare them to a fungible
						token.
					</p>
					<p>
						A fungible token is a token that retains the same value compared to
						another token that originates from the same contract.
					</p>
					<h2>Why are musicians getting involved with NFTs?</h2>
					<p>
						Digital music has been a rising trend since it was released. The use
						of CDs has declined dramatically, especially after the release of
						music streaming services such as Spotify or Apple Music.
					</p>
					<p>
						Musicians now stream most of their music on these services. However,
						music artists are unfairly paid. The revenue percentage from music
						streaming has been an issue for years, with artists getting paid
						around 15% per stream.😔
					</p>
					<p>
						“Even if I upload the full version of the contained song to DSPs
						worldwide (which I can still do), I would never get even close to
						$10k, after fees by DSPs, label, marketing, etc.,” Linkin Park’s
						Mike Shinoda, who raised around $11,000 for his first NFT, recently
						tweeted.
					</p>
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
