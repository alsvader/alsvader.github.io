import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ListItemLink } from '../../index';
import { SYSTEM_ACTIONS } from '../../../redux/actions';
import { MenuOptions } from '../../../utils/constants';

import styles from './styles';

const DrawerListItems = ({ classes, toggleDrawer }) => {
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {MenuOptions.map((item, index) => (
          <ListItemLink
            key={index}
            icon={item.icon}
            label={item.label}
            to={item.to}
          />
        ))}
      </List>
    </div>
  );
};

DrawerListItems.propTypes = {
  classes: PropTypes.shape({
    list: PropTypes.string,
  }).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(SYSTEM_ACTIONS.setDrawerOpen(false)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(DrawerListItems));
