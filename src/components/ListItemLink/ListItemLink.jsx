import { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Home,
  Business,
  Work,
  LibraryBooks,
  ContactMail,
} from '@material-ui/icons';

import styles from '../../styles/drawerListStyle';

const ICONS = {
  Home,
  Business,
  Work,
  LibraryBooks,
  ContactMail,
};

const ListItemLink = ({ classes, icon, label, to }) => {
  const [t] = useTranslation();

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
  );

  const Icon = ICONS[icon];

  return (
    <ListItem button component={renderLink}>
      {icon ? (
        <ListItemIcon>
          <Icon classes={{ root: classes.iconSelected }} />
        </ListItemIcon>
      ) : null}
      <ListItemText
        primary={t(label)}
        classes={{ root: classes.itemSelected }}
      />
    </ListItem>
  );
};

ListItemLink.propTypes = {
  classes: PropTypes.shape({
    iconSelected: PropTypes.string,
    itemSelected: PropTypes.string,
  }).isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ListItemLink);
