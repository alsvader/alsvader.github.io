import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageLoader } from '../../../components';
import { loadConfiguration } from '../../../redux/middleware/configuration';

const Configuration = ({ children }) => {
	const dispatch = useDispatch();
	const isConfLoaded = useSelector(
		({ system: { languageCode, languageMenuItemSelected, languageLabel } }) =>
			languageCode && languageMenuItemSelected !== null && languageLabel
				? true
				: false
	);
	console.log('isConfLoaded', isConfLoaded);

	useEffect(() => {
		dispatch(loadConfiguration);
	}, []);

	if (!isConfLoaded) return <PageLoader />;

	return children;
};

export default Configuration;
