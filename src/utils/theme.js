import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { constants } from './constants';

let theme = createTheme({
	palette: {
		primary: {
			main: blue[800],
		},
		greyColor: {
			main: '#8492a6',
		},
		white: {
			main: '#FFFFFF',
		},
	},
	typography: {
		fontFamily: ['Nunito', 'sans-serif'].join(','),
		fontSize: 16,
	},
	breakpoints: {
		values: constants.BREAKPOINTS,
	},
});

theme = responsiveFontSizes(theme);

export default theme;
