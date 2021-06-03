/**
 * Sticky Footer component
 */

import React, { useState } from "react";
import footerStyles from "./styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Footer = () => {
  const [classes] = useState(footerStyles());
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">All rights reserved.</Typography>
        <Typography variant="body2" color="textSecondary">
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/">
            Your website name
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
