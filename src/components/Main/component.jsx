/**
 * Main Component.
 * Always the first component to load for the Application
 */
import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Container from "@material-ui/core/Container";
import mainStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../Home";
import Player from "../Player";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => {
  const [classes] = useState(mainStyles());
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container className={classes.main} maxWidth="sm">
        <Router>
          <div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/player">
              <Player />
            </Route>
          </div>
        </Router>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
