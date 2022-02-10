import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MenuBar, DrawerMenu } from '../../components';
import { ROUTES } from '../../utils/constants';

const Layout = () => {
	return (
		<>
			{/* <MenuBar /> */}
			<Router>
				<MenuBar />
				<DrawerMenu />
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
						{/* TODO: Create a component that will render the not found page  */}
						<h1>No Match</h1>
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default Layout;
