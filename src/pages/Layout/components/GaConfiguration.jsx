import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GaConfiguration = ({ gaInitialized, children }) => {
	const location = useLocation();

	useEffect(() => {
		if (gaInitialized) {
			ReactGA.send({
				hitType: 'pageview',
				page: location.pathname + location.search,
			});
		}
	}, [gaInitialized, location]);

	return children;
};

export default GaConfiguration;
