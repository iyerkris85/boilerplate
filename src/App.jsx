import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Main from './components/Main';
import ErrorFallback from './components/ErrorFallback';

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Main />
  </ErrorBoundary>
);

export default App;
