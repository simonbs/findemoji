import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import configureStore from '../store';

import Main from './Main';
import Home from './Home';
import NotFound from './NotFound';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      { () =>
        <Router history={this.props.history}>
          <Route component={Main}>
            <Route path='/' component={Home} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      }
      </Provider>
    );
  }
}

