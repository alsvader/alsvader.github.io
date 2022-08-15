import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './redux';
import theme from './utils/theme';
import { Layout } from './pages';
import './index.css';

const generateClassName = createGenerateClassName({
	productionPrefix: navigator.userAgent === 'ReactSnap' ? 'snap' : 'jss',
});

function App() {
	return (
		<Provider store={store}>
			<StylesProvider generateClassName={generateClassName}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Layout />
				</ThemeProvider>
			</StylesProvider>
		</Provider>
	);
}

export default App;
