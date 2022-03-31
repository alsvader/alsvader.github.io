const BREAKPOINTS = {
	xs: 0,
	mobile360: 360,
	xs400: 425,
	sm: 600,
	tablet: 768,
	ipadAir: 820,
	md: 960,
	laptop: 1024,
	lg: 1280,
	laptopLg: 1440,
	xl: 1920,
};

const BLOG_API = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const MEDIA_URI = `${BLOG_API}/media/`;

const constants = { BREAKPOINTS, BLOG_API, MEDIA_URI };

export default constants;
