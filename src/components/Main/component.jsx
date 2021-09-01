/**
 * Main Component.
 * Always the first component to load for the Application
 */
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import mainStyles from './styles';
import Home from '../Home';
import Player from '../Player';
import Footer from '../Footer';
import Header from '../Header';

const Main = () => {
  const [classes] = useState(mainStyles());
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Header />
        <Container className={classes.main} maxWidth="sm">
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/player" component={Player} />
          </div>
        </Container>
      </Router>
      <Footer />
    </div>
  );
};

export default Main;
