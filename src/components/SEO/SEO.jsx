import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { constants } from '../../utils/constants';

const SEO = ({
	title,
	description,
	url,
	type,
	image,
	imageAlt,
	twitterUser,
}) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={image} />
			<meta property="og:image:alt" content={imageAlt} />
			<meta property="og:description" content={description} />
			<meta
				property="og:site_name"
				content="Aaron Lopez Sosa | Web &#38; Mobile developer"
			/>
			<meta property="og:locale" content="es_MX" />
			<meta property="article:author" content="Aarón López Sosa" />

			<meta name="twitter:card" content={title} />
			<meta name="twitter:site" content={twitterUser} />
			<meta name="twitter:creator" content={twitterUser} />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:image:alt" content={imageAlt} />
		</Helmet>
	);
};

SEO.defaultProps = {
	title: 'Aaron Lopez Sosa | Web & Mobile developer',
	description:
		'Hola, soy un desarrollador de software viviendo en México. Apasionado por la construcción de productos utilizando React JS/React Native y Node JS. Yeah! I ❤️ JavaScript. Igual me gusta compartir mis ideas, pensamientos y todo lo que he aprendido al realizar mi trabajo.',
	url: constants.APP_WEBSITE_URL,
	type: 'website',
	image: `${constants.MEDIA_URI}profile.webp`,
	imageAlt: 'This is an image cover from the blog of Aaron Lopez Sosa',
	twitterUser: '@als_link',
};

SEO.propTypes = {
	title: PropTypes.string.isRequired,
};

export default SEO;
