/**
 * ErrorBoundry displays error on screen
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Container fixed>
    <div>
      <Alert severity="error" m={2}>
        Something went wrong:
      </Alert>
      <pre style={{ color: 'red' }} m={1}>
        {error.message}
      </pre>
      <Button m={2} variant="contained" color="primary" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  </Container>
);

ErrorFallback.propTypes = {
  error: PropTypes.string.isRequired,
  resetErrorBoundary: PropTypes.string.isRequired,
};

export default ErrorFallback;
