import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
	AppBar,
	Button,
	IconButton,
	Toolbar,
	Typography,
	withStyles,
	Menu,
	MenuItem,
} from '@material-ui/core';
import {
	Translate,
	KeyboardArrowDown,
	Menu as MenuIcon,
} from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useTranslation } from 'react-i18next';
import { AVAILABLE_LANGUAGES, MenuOptions } from '../../utils/constants';
import { SYSTEM_ACTIONS } from '../../redux/actions';

import rootStyle from '../../styles/rootStyle';
import styles from './styles';

const useStyles = makeStyles(rootStyle);

const MenuBar = ({
	classes,
	languageMenuItemSelected,
	languageLabel,
	setMenuItemSelected,
	setLanguageLabel,
	setLanguageCode,
	openDrawer,
}) => {
	const [t, i18n] = useTranslation();
	const [anchorEl, setAnchorEl] = useState(null);
	const rootClasses = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('laptop'));
	const showMenuIcon = useMediaQuery(theme.breakpoints.up('laptop'));

	const openChangeLanguage = (event) => setAnchorEl(event.currentTarget);

	const closeChangeLanguage = () => setAnchorEl(null);

	const changeLanguage = (code, index, label) => {
		i18n.changeLanguage(code);
		setLanguageCode(code);
		setMenuItemSelected(index);
		setLanguageLabel(label);
		closeChangeLanguage();
	};

	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar classes={{ root: rootClasses.container }}>
					{!showMenuIcon && (
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
							onClick={openDrawer}
						>
							<MenuIcon />
						</IconButton>
					)}
					<Typography variant="h6" className={classes.title}>
						Aarón López Sosa
					</Typography>
					{/* show the menu options when the window increases */}
					{matches &&
						MenuOptions.map((item, index) => (
							<Button
								key={index}
								className={classes.buttonOption}
								color="inherit"
								component={RouterLink}
								to={item.to}
							>
								{t(item.label)}
							</Button>
						))}
					<Button
						aria-controls="language-menu"
						aria-haspopup="true"
						color="inherit"
						startIcon={<Translate />}
						endIcon={<KeyboardArrowDown />}
						onClick={openChangeLanguage}
					>
						{matches && t(languageLabel)}
					</Button>
					<Menu
						id="language-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={closeChangeLanguage}
					>
						{AVAILABLE_LANGUAGES.map((item, index) => (
							<MenuItem
								key={index}
								selected={index === languageMenuItemSelected}
								onClick={() => changeLanguage(item.code, index, item.label)}
							>
								{t(item.label)}
							</MenuItem>
						))}
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	);
};

MenuBar.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string,
		menuButton: PropTypes.string,
		title: PropTypes.string,
		buttonOption: PropTypes.string.isRequired,
	}).isRequired,
	languageMenuItemSelected: PropTypes.number.isRequired,
	languageLabel: PropTypes.string.isRequired,
	setMenuItemSelected: PropTypes.func.isRequired,
	setLanguageLabel: PropTypes.func.isRequired,
	setLanguageCode: PropTypes.func.isRequired,
	openDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = ({
	system: { languageMenuItemSelected, languageLabel },
}) => ({
	languageMenuItemSelected,
	languageLabel,
});

const mapDispatchToProps = (dispatch) => ({
	setMenuItemSelected: (index) =>
		dispatch(SYSTEM_ACTIONS.setLanguageMenuItemSelected(index)),
	setLanguageLabel: (label) => dispatch(SYSTEM_ACTIONS.setLanguageLabel(label)),
	setLanguageCode: (code) => dispatch(SYSTEM_ACTIONS.setLanguageCode(code)),
	openDrawer: () => dispatch(SYSTEM_ACTIONS.setDrawerOpen(true)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(withStyles(styles)(MenuBar));
