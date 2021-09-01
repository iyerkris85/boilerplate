/**
 * Header panel
 */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router';
import headerStyles from './styles';
import menu from './menu';

const Header = () => {
  const [classes] = useState(headerStyles());

  function isActive() {
    return false;
  }

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Boilerplate
        </Typography>
        <nav>
          {menu.map((m) => (
            <Link
              key={m.label}
              className={isActive(m.path) ? classes.activelink : classes.link}
              href={m.path}
              underline="none"
            >
              <FontAwesomeIcon icon={m.icon} className={classes.icon} />
              {m.label}
            </Link>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
