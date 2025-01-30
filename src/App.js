import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Live from './components/Live';
import Upcoming from './components/Upcoming';
import Results from './components/Results';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/spardha/live" component={Live} />
          <Route path="/spardha/upcoming" component={Upcoming} />
          <Route path="/spardha/results" component={Results} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
