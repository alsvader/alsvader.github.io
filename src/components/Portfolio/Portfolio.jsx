import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import Lightbox from 'react-image-lightbox';
import projects from './data.json';
import FssHome from '../../assets/images/fss_home.webp';
import MaasHome from '../../assets/images/maas_home.webp';
import Availability from '../../assets/images/availability_login.webp';
import FssApp from '../../assets/images/fss_app_home.webp';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import 'swiper/css/bundle';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

SwiperCore.use([Autoplay, Pagination, Navigation]);

const images = {
	fss: FssHome,
	maas: MaasHome,
	availability: Availability,
	fssMobile: FssApp,
};

const imagesForModal = [FssHome, MaasHome, Availability, FssApp];

const Portfolio = ({ classes }) => {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [t] = useTranslation();

	const activateLighbox = (index) => {
		setPhotoIndex(index);
		setIsOpen(true);
	};

	return (
		<>
			<Swiper
				freeMode={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				navigation={false}
				spaceBetween={20}
				slidesPerView={1}
				// onSlideChange={() => console.log('slide change')}
				// onSwiper={(swiper) => console.log(swiper)}
				className={classes.swiperContainer}
				breakpoints={{
					960: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 4,
					},
				}}
			>
				{projects.map((project, index) => (
					<SwiperSlide
						key={`${project.title}-${index}`}
						onClick={() => activateLighbox(index)}
					>
						<Card className={classes.cardRoot}>
							<CardMedia
								className={classes.media}
								image={images[project.image]}
								title={project.title}
							/>
							<CardContent>
								<h3>{project.title}</h3>
								<p>{t(`${project.description}`)}</p>
							</CardContent>
						</Card>
					</SwiperSlide>
				))}
			</Swiper>
			{isOpen && (
				<Lightbox
					mainSrc={imagesForModal[photoIndex]}
					nextSrc={imagesForModal[(photoIndex + 1) % imagesForModal.length]}
					prevSrc={
						imagesForModal[
							(photoIndex + imagesForModal.length - 1) % imagesForModal.length
						]
					}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() =>
						setPhotoIndex(
							(photoIndex + imagesForModal.length - 1) % imagesForModal.length,
						)
					}
					onMoveNextRequest={() =>
						setPhotoIndex((photoIndex + 1) % imagesForModal.length)
					}
				/>
			)}
		</>
	);
};

Portfolio.propTypes = {
	classes: PropTypes.shape({
		swiperContainer: PropTypes.string.isRequired,
		cardRoot: PropTypes.string.isRequired,
		media: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(Portfolio);
