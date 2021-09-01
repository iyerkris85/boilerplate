/**
 * Header panel
 */
import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "@material-ui/core/Link";
import headerStyles from "./styles";
import menu from "./menu";

const Header = ({ props }) => {
  const [classes] = useState(headerStyles());
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Boilerplate
        </Typography>
        <nav>
          {menu.map((m, i) => (
            <React.Fragment>
              <FontAwesomeIcon icon={m.icon} />
              <Link
                variant="button"
                key={i}
                color="textPrimary"
                className={classes.link}
                href={m.path}
              >
                {m.label}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
