import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MenuBar, DrawerMenu, Footer } from '../../../components';
import NotFound from '../../404/NotFound';
import useGATracker from '../../../hooks/useGATracker';
import { ROUTES } from '../../../utils/constants';
import styles from '../../Home/styles';

const AppContent = ({ classes }) => {
	useGATracker();

	return (
		<>
			<Router>
				<MenuBar />
				<DrawerMenu />
				<Toolbar />
				<Switch>
					{ROUTES.map((item, index) => (
						<Route
							key={index}
							path={item.path}
							component={item.component}
							exact={item.exact}
							strict={item.strict}
						/>
					))}
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Grid item xs={12} className={classes.footer}>
					<Footer />
				</Grid>
			</Router>
		</>
	);
};

AppContent.propTypes = {
	classes: PropTypes.shape({
		footer: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(AppContent);
