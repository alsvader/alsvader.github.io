import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { constants } from '../utils/constants';

const useGATracker = () => {
	const [gaInitialized, setGaInitialized] = useState(false);

	useEffect(() => {
		if (!gaInitialized) {
			ReactGA.initialize(constants.GOOGLE_ANALYTICS_ID, {
				debug_mode: constants.TEST_MODE,
			});
			setGaInitialized(true);
		}
	}, [gaInitialized]);
};

export default useGATracker;
