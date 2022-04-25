import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Drawer } from '@material-ui/core';
import { SYSTEM_ACTIONS } from '../../redux/actions';
import DrawerListItems from './DrawerListItems/DrawerListItems';

const DrawerMenu = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
      <DrawerListItems />
    </Drawer>
  );
};

DrawerMenu.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ system: { drawerOpen } }) => ({ drawerOpen });

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(SYSTEM_ACTIONS.setDrawerOpen(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
